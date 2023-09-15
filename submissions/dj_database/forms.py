"""Forms for playlist app."""
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional

class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    # Add the necessary code to use this form

    name = StringField(
        "Playlist Name",
        validators=[InputRequired()],
    )

    descriptiom = StringField(
        "Playlist Description",
        validators=[InputRequired()],
    )

    id = StringField(
        "Playlist ID",
        validators=[InputRequired()],
    )






class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form

    playlist_id = StringField(
        "Playlist ID",
        validators=[InputRequired()],
    )

    song_id = StringField(
        "Song ID",
        validators=[InputRequired()],
    )

    song_name = StringField(
        "Song Name",
        validators=[InputRequired()],

    )

    


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
