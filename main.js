// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Hip Hop Rap Beat Instrumental 1",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "1.mp3"
},
{
	name: "Hip Hop Rap Beat Instrumental 2",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "2.mp3"
},
{
	name: "Hip Hop Rap Beat Instrumental 3",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "3.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 4",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "4.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 5",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "5.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 6",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "6.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 7",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "7.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 8",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "8.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 9",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "9.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 10",
	artist: "Imelite Beatmaker",
	image: "img\creator.jpg",
	path: "10.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 11",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "11.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 12",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "12.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 13",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "13.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 14",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "14.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 15",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "15.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 16",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "16.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 17",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "17.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 18",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "18.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 19",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "19.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 20",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "20.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 21",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "21.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 22",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "22.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 23",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "23.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 24",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "24.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 25",
	artist: "Imelite Beatmaker",
	image: "img\creator.jpg",
	path: "25.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 26",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "26.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 27",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "27.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 28",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "28.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 29",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "29.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 30",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "30.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 31",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "31.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 32",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "32.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 33",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "33.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 34",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "34.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 35",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "35.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 36",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "36.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 37",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "37.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 38",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "38.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 39",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "39.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 40",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "40.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 41",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "41.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 42",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "42.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 43",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "43.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 44",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "44.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 45",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "45.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 46",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "46.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 47",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "47.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 48",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "48.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 49",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "49.mp3",
},
{
	name: "Hip Hop Rap Beat Instrumental 50",
	artist: "Imelite Beatmaker",
	image: "creator.jpg",
	path: "50.mp3",
},
];
function loadTrack(track_index) {
// Clear the previous seek timer
clearInterval(updateTimer);
resetValues();

// Load a new track
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_art.style.backgroundImage =
	"url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
	"PLAYING " + (track_index + 1) + " OF " + track_list.length;

// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);
}
// Function to reset all values to their default
function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}
function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;
}

function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
	track_index += 1;
else track_index = 0;

// Load and play the new track
loadTrack(track_index);
playTrack();
}

function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
	track_index -= 1;
else track_index = track_list.length - 1;

// Load and play the new track
loadTrack(track_index);
playTrack();
}
function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function setVolume() {
// Set the volume according to the
// percentage of the volume slider set
curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
	seekPosition = curr_track.currentTime * (100 / curr_track.duration);
	seek_slider.value = seekPosition;

	// Calculate the time left and the total duration
	let currentMinutes = Math.floor(curr_track.currentTime / 60);
	let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(curr_track.duration / 60);
	let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

	// Add a zero to the single digit time values
	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	// Display the updated duration
	curr_time.textContent = currentMinutes + ":" + currentSeconds;
	total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}
// Load the first track in the tracklist
loadTrack(track_index);