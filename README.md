# Bot

A lightweight Flask-based chat application with a simple browser interface.

## Project Structure

- `app.py` — Flask application and API routes
- `templates/index.html` — web page template
- `static/chat.js` — browser-side chat behavior
- `static/style.css` — page styling
- `docs/` — project documentation

## Requirements

- Python 3
- Flask

## Installation

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run

```bash
python app.py
```

## API

### POST `/chat`

Request:

```json
{"message":"Hello"}
```

Response:

```json
{"reply":"You Said: Hello"}
```

## Future Improvements

Automated testing, validation, structured errors, conversation history, and real bot/model integration.
