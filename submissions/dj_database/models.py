
"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""

    # ADD THE NECESSARY CODE HERE

    __tablename__ = "Playlist"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False)
    # songs = db.Column(db.Text, nullable=False)



class Song(db.Model):
    """Song."""

    # ADD THE NECESSARY CODE HERE

    __tablename__ = "Song"

    id = db.Column(db.Integer, primary_key=True)
    playlist_id = db.Column(db.Text, nullable=False)
    song_id = db.Column(db.Text, nullable=False)
    title = db.Column(db.Text, nullable=False)
    


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""

    # ADD THE NECESSARY CODE HERE

    __tablename__ = "PlaylistSong"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=False)


# DO NOT MODIFY THIS FUNCTION
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
