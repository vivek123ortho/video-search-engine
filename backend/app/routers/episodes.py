from fastapi import APIRouter
from sqlalchemy import select

from app.deps import CurrentUser, DbSession
from app.models import Episode
from app.schemas import EpisodeOut

router = APIRouter(prefix="/episodes", tags=["episodes"])


@router.get("", response_model=list[EpisodeOut])
def list_episodes(user: CurrentUser, db: DbSession):
    stmt = (
        select(Episode)
        .where(Episode.user_id == user.id)
        .order_by(Episode.created_at.desc())
    )
    return db.scalars(stmt).all()