function Login() {
  return (
    <main>
      <div className="form-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Login to Sudoku Master</h1>
          <p>Enter your credentials to access your account and track your progress.</p>
        </div>

        {/* Login Form */}
        <div className="form-content">
          <h2>Account Login</h2>

          <form action="#" method="post">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled>Login</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
