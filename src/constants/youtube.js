export const BASE_URL='https://www.googleapis.com/youtube/v3';
export const API_KEY='AIzaSyDrPZTp0cUCl_fSAdIWln2yAF4PT8zMgCI';
export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics`;