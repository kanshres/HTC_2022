# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str
    password: str
    home_address: str
    listings: list[int]
