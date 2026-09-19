# Input Validation

The chat endpoint can be made more robust by validating incoming JSON and checking that the `message` field is a string with a reasonable length.

Validation should happen before application logic processes the request.
