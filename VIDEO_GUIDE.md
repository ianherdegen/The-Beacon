# Video Guide for The Beacon Website

This guide shows you how to add locally hosted videos to your Beacon website.

## 📁 File Structure

Place your video files in the `public/videos/` directory:
```
public/
  └── videos/
      └── your-video.mp4
```

## 🎬 Option 1: Using the VideoPlayer Component (Recommended)

I've created a reusable `VideoPlayer` component with custom controls.

### Basic Usage

```tsx
import { VideoPlayer } from "@/components/VideoPlayer";

<VideoPlayer 
  src="/videos/your-video.mp4"
  controls={true}
/>
```

### With All Options

```tsx
<VideoPlayer 
  src="/videos/hero-video.mp4"
  poster="/images/video-poster.jpg"  // Thumbnail before video loads
  autoplay={true}                    // Auto-play (must be muted)
  loop={true}                        // Loop the video
  muted={true}                       // Muted by default
  controls={true}                    // Show browser controls
  className="w-full h-96"            // Custom styling
/>
```

## 🎬 Option 2: Simple HTML5 Video Tag

For a simpler approach, use the native HTML5 video element:

```tsx
<video 
  src="/videos/your-video.mp4"
  controls
  className="w-full h-auto"
  playsInline
>
  Your browser does not support the video tag.
</video>
```

## 🎬 Option 3: Background Video

To add a background video behind your content:

```tsx
<div className="relative">
  {/* Background Video */}
  <video 
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
  >
    <source src="/videos/background.mp4" type="video/mp4" />
  </video>
  
  {/* Content on top */}
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</div>
```

## 📝 Example: Adding Video to Your Home Page

Here's how you could add a video section to your main page:

```tsx
// In src/app/page.tsx
import { VideoPlayer } from "@/components/VideoPlayer";

// Add this section before or after your GameCarousel
<section className="w-full max-w-4xl mx-auto p-8">
  <VideoPlayer 
    src="/videos/beacon-intro.mp4"
    poster="/images/video-poster.jpg"
    loop={true}
    controls={true}
    className="rounded-lg shadow-2xl"
  />
</section>
```

## 🎯 Best Practices

1. **Video Formats**: Use `.mp4` (H.264 codec) for best browser compatibility
2. **File Size**: Keep videos under 10MB for better performance
3. **Optimization**: Compress videos using tools like HandBrake or FFmpeg
4. **Poster Images**: Always include a poster image for better UX
5. **Autoplay Rules**: Browsers only allow autoplay if video is muted
6. **Mobile**: Use `playsInline` attribute for better mobile support

## 🔧 Video Optimization Commands

If you need to optimize a video file:

```bash
# Using FFmpeg to compress a video
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 output.mp4

# Reduce quality/size
ffmpeg -i input.mp4 -vf scale=1280:720 -b:v 1M output.mp4
```

## 📍 Where to Add Videos

You can add videos:
- As a hero section on the homepage
- As background videos
- In game cards/modals
- In a dedicated video gallery
- As part of the GameCarousel component

## 🚀 Next Steps

1. Add your video file to `public/videos/`
2. Import the `VideoPlayer` component where needed
3. Reference your video using `/videos/filename.mp4`
4. Test locally with `yarn dev`
5. Deploy to Vercel - videos will be served from the public folder






