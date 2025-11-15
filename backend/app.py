from fastapi import FastAPI, HTTPException
from typing import Literal
from datetime import date 
from decimal import Decimal 
from supabase import create_client, Client 
from pydantic import BaseModel
import os 
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
supabase: Client = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

class Student(BaseModel):
    name: str
    email: str
    avatarcolor: str
    major: str 

class Budget(BaseModel):
    user_id: int
    category: str
    period: Literal["weekly", "monthly"]
    limit_amount: float

class BudgetResponse(BaseModel):
    id: int
    user_id: int
    category: str
    period: str
    limit_amount: float
    created_at: str

class LeaderboardSnapshot(BaseModel):
    user_id: int
    total_savings: float
    rank: int
    snapshot_date: date

class LeaderboardSnapshotResponse(BaseModel):
    id: int
    user_id: int
    total_savings: float
    rank: int
    snapshot_date: date
    created_at: str

class InvestmentTip(BaseModel):
    tip_text: str
    category: str | None = None
    is_active: bool = True
    display_date: date | None = None

class InvestmentTipResponse(BaseModel):
    id: int
    tip_text: str
    category: str | None
    is_active: bool
    display_date: date | None
    created_at: str

@app.post("/students/")
async def create_student(student: Student):
    data = supabase.table("students").insert({

        "name": student.name,
        "email": student.email,
        "avatarcolor": student.avatarcolor,
        "major": student.major,

    }).execute()
    return data.data

@app.get("/students/")
async def get_students():
    data = supabase.table("students").select("*").execute()
    return data.data

@app.get("/students/{student_id}/profile")
async def get_student_profile(student_id: int):

    student_response = supabase.table("students").select("*").eq("id", student_id).single().execute()

    if not student_response.data:
        raise HTTPException(status_code=404, detail="Student not found")
    
    budgets_response = supabase.table("budgets").select("*").eq("user_id", student_id).execute()

    transactions_response = supabase.table("transactions").select("*").eq("student_id", student_id).order("createdat", desc=True).limit(20).execute()

    leaderboard_response = supabase.table("leaderboard_snapshots").select("*").eq("user_id", student_id).order("snapshot_date", desc=True).limit(1).execute()

    return {
        "student": student_response.data,
        "budgets": budgets_response.data,
        "recent_transactions": transactions_response.data,
        "leaderboard_position": leaderboard_response.data[0] if leaderboard_response.data else None
    }

    
