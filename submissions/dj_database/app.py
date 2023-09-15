from flask import Flask, redirect, render_template, url_for
from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Playlist, Song, PlaylistSong
from forms import NewSongForPlaylistForm, SongForm, PlaylistForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playlist-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
# with app.app_context():
#     db.create_all()

app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"

# Having the Debug Toolbar show redirects explicitly is often useful;
# however, if you want to turn it off, you can uncomment this line:
#
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route("/")
def root():
    """Homepage: redirect to /playlists."""

    return redirect("/playlists")


##############################################################################
# Playlist routes


@app.route("/playlists/", methods=["GET", "POST"])
def show_all_playlists():
    """Return a list of playlists."""

    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)




@app.route("/playlists/<int:playlist_id>", methods=["GET", "POST"])
def show_playlist(playlist_id):
    """Show detail on specific playlist."""

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK
    playlist = Playlist.query.get_or_404(playlist_id)

    return render_template("playlist.html", playlist=playlist)


@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
    """Handle add-playlist form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-playlists
    """

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    form = PlaylistForm()

    if form.validate_on_submit():
        name = form.name.data
        id = form.id.data
        description = form.descriptiom.data

        ply = Playlist(name=name, id=id, description=description)
        db.session.add(ply)
        db.session.commit()
        return redirect("/playlists/")
    else:
        return render_template("new_playlist.html", form=form)

    # if form.validate_on_submit():
    #     data = {k: v for k, v in form.data.items() if k != "csrf_token"}
    #     new_playlist = Playlist(**data)

    #     db.session.add(new_playlist)
    #     db.session.commit()

    #     return redirect(url_for("playlists.html"))
    

    # else:
    #     return render_template("new_playlist.html", form = form)





##############################################################################
# Song routes


@app.route("/songs/", methods=["GET", "POST"])
def show_all_songs():
    """Show list of songs."""

    songs = Song.query.all()
    return render_template("songs.html", songs=songs)


@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """return a specific song"""

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK


@app.route("/songs/add", methods=["GET", "POST"])
def add_song():
    """Handle add-song form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-songs
    """

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    form = SongForm()

    if form.validate_on_submit():
        playlist_id = form.name.data
        song_id = form.id.data
        song_name = form.descriptiom.data

        sng = Song(playlist_id=playlist_id, song_id=song_id, song_name=song_name)
        db.session.add(sng)
        db.session.commit()
        return redirect("/songs/")
    else:
        return render_template("new_playlist.html", form=form)
    
        


@app.route("/playlists/<int:playlist_id>/add-song", methods=["GET", "POST"])
def add_song_to_playlist(playlist_id):
    """Add a playlist and redirect to list."""

    # BONUS - ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    # THE SOLUTION TO THIS IS IN A HINT IN THE ASSESSMENT INSTRUCTIONS

    playlist = Playlist.query.get_or_404(playlist_id)
    print("got playlist")
    form = NewSongForPlaylistForm()
    # songs = PlaylistSong.query.filter(playlist_id=playlist_id)

    # Restrict form to songs not already on this playlist

    curr_on_playlist = [s.id for s in playlist.songs]
    print("songs not on playlist")
    form.song.choices = (db.session.query(Song.id, Song.title)
                      .filter(Song.id.notin_(curr_on_playlist))
                      .all())


    if form.validate_on_submit():

          # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

        playlist_song = PlaylistSong(song_id=form.song.data,
                            playlist_id=playlist_id)
        db.session.add(playlist_song)
        # song = Song.query.get(form.song.data)
        # playlist.songs.append(song)

        db.session.commit()

        return redirect(f"/playlists/{playlist_id}")

    return render_template("add_song_to_playlist.html",
                             playlist=playlist,
                             form=form)
