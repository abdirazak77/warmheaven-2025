# Production Environment Variables

## Required Environment Variables

### Clerk Authentication
```
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Security
```
NEXT_PUBLIC_RATE_LIMIT_WINDOW=60
NEXT_PUBLIC_RATE_LIMIT_ATTEMPTS=5
NEXT_PUBLIC_MAX_LOGIN_ATTEMPTS=5
NEXT_PUBLIC_LOCKOUT_DURATION=300000
```

### Monitoring
```
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_ENVIRONMENT=production
```

### Performance
```
NEXT_PUBLIC_COMPRESSION_THRESHOLD=1024
NEXT_PUBLIC_IMAGE_OPTIMIZATION=true
```

## Redis Configuration (Optional for Rate Limiting)
```
REDIS_URL=your_redis_url
```

## Additional Notes
- Replace all placeholder values with your actual credentials
- Keep these environment variables secure
- Never commit your actual environment variables to version control
- Add these variables to your Vercel project settings
