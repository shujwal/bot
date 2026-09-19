# Performance Notes

The application is currently small and lightweight.

As features grow:

- avoid unnecessary work inside request handlers
- reuse expensive resources where appropriate
- move long-running work outside request handling when needed
- keep frontend requests focused
