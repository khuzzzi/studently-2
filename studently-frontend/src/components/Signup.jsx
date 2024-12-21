import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous error
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true, // Important for sending cookies
          headers: {
            "Content-Type": "application/json", // Specify content type
          },
        }
      );
  
      if (response.data.success) {
        console.log("Registration successful:", response.data.message);
        // You can redirect the user or show a success message
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred during registration");
      console.error("Error during registration:", err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Signup</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
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
            {loading ? "Registering..." : "Sign Up"}
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
