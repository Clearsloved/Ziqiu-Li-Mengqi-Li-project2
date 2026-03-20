function Register() {
  return (
    <main>
      <div className="form-container">
        {/* Page Title */}
        <div className="page-title">
          <h1>Create Your Account</h1>
          <p>Join Sudoku Master to track your progress, save games, and compete on leaderboards.</p>
        </div>

        {/* Register Form */}
        <div className="form-content">
          <h2>Register New Account</h2>

          <form action="#" method="post">
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Choose a username" required />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Create a password" required />
            </div>

            {/* Verify Password Field */}
            <div className="form-group">
              <label htmlFor="verify-password">Verify Password</label>
              <input type="password" id="verify-password" name="verify-password" placeholder="Re-enter your password" required />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled>Create Account</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
