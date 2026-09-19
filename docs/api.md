# API Guide

The current API exposes `POST /chat`.

The endpoint accepts JSON containing a `message` value and returns JSON containing a `reply` value.

Keeping the interface simple makes it easier to replace the response logic with a real bot later.
