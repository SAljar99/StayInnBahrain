import api from "./api"

export const RegisterUser = async (data) => {
  try {
    const res = await api.post("/auth/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignInUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data)
    // Set the current signed in users token to localStorage
    localStorage.setItem("token", res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await api.get("/auth/session")
    return res.data
  } catch (error) {
    throw error
  }
}
