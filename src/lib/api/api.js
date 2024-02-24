

// export async function handleLogin(loginData, setUserData) {
//     try {
//         const response = await fetch("/api/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(loginData),
//         });
//         if (response.ok) {
//             const userData = await response.json();
//             setUserData(userData);
//             console.log("User logged in:", userData);
//         } else {
//             throw new Error("Failed to log in");
//         }
//     } catch (error) {
//         console.error("Error logging in:", error);
//     }
// }