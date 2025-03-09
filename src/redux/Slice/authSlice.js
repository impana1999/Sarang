import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { googleLogin } from "../../components/signIn/GooglrLogin";

// Async thunk to handle Google login
export const loginWithGoogle = createAsyncThunk(
    "auth/loginWithGoogle",
    async (_, { rejectWithValue }) => {
        try {
            // Extract details from Google login
            const { name, email } = await googleLogin(); // Assuming Google login returns name and email

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({ name, email });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            console.log('raw', raw); // Log the raw request data

            // Send a request to your backend
            const response = await fetch(`http://192.168.1.31:3000/Login`, requestOptions);

            if (!response.ok) {
                // Check if response is OK
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to log in with backend");
            }

            const data = await response.json(); // Parse response from backend
            console.log("Backend Response: ", data);

            // Assuming the backend sends { success: true, message: '...', user: { ... } }
            if (data.success) {
                // Return user data
                return {
                    user: {
                        _id: data.user._id,
                        name: data.user.name,
                        email: data.user.email,
                    },
                };
            } else {
                throw new Error(data.message || "Login failed");
            }
        } catch (error) {
            return rejectWithValue(error.message); // Return error message if any
        }
    }
);

// Slice to manage auth state
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user"); // Remove user from localStorage
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginWithGoogle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginWithGoogle.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; // Store user data in state
                localStorage.setItem("user", JSON.stringify(action.payload.user)); // Store user in localStorage
            })
            .addCase(loginWithGoogle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store error message
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
