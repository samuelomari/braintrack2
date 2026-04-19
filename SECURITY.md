# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Braintrack, please email us at security@braintrack.com instead of using the public issue tracker.

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

## Security Best Practices

### For Users
- Keep browser updated to latest version
- Use strong, unique passwords
- Clear browser cache regularly
- Don't share session tokens

### For Developers
- Validate all user input server-side
- Sanitize HTML to prevent XSS attacks
- Use HTTPS for all communications
- Keep dependencies updated
- Use environment variables for secrets
- Implement rate limiting on forms
- Regular security audits

## Supported Versions

| Version | Supported | Notes |
|---------|-----------|-------|
| 1.2.x   | ✓ Yes     | Current release |
| 1.1.x   | ✓ Yes     | Security patches only |
| 1.0.x   | ✗ No      | End of life |

## Vulnerability Disclosure Timeline

- Day 0: Vulnerability reported
- Day 1: Initial acknowledgment
- Day 7-14: Security patch released
- Public disclosure after patch is available

## Security Headers

The application uses:
- Content Security Policy (CSP)
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options to prevent MIME sniffing

## Contact

Security concerns: security@braintrack.com
General inquiries: support@braintrack.com
