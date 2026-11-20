from fastapi import FastAPI

app = FastAPI(title="Enterprise SDLC Sample API", version="0.1.0")


@app.get("/healthz", tags=["health"])
def healthz() -> dict[str, str]:
    return {"status": "ok"}
