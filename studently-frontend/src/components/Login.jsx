import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
        // Send login credentials to the server (API endpoint for user login)
        const response = await axios.post("http://localhost:3000/api/v1/user/login", {
            email,
            password,
        }, {
            withCredentials: true, // Important for sending cookies
            headers: {
                'Content-Type': 'application/json', // Specify content type
            },
        });

        // On success, store a flag in localStorage (if needed)
        localStorage.setItem('loggedIn', 'true');
        console.log("Login successful!", response.data);

        // Redirect the user or handle successful login
        if (response.data.success) {
            navigate("/"); // Navigate to the desired route after successful login
        }
    } catch (err) {
        setError(err.response?.data?.message || "Login failed. Please try again.");
        console.error("Login error:", err);
    } finally {
        setLoading(false);
    }
};


  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </CardContent>
      <CardFooter className="flex justify-center">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </CardFooter>
    </Card>
  );
}
