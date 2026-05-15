import type { CoachPressKit } from "@/data/coachPressKit";

type VideoSectionProps = {
  videos: CoachPressKit["videos"];
};

export function VideoSection({ videos }: VideoSectionProps) {
  return (
    <section className="section" id="videos">
      <div className="section-heading">
        <p className="section-kicker">Videos</p>
        <h2>{videos.title}</h2>
        <p>{videos.subtitle}</p>
      </div>

      <div className="video-grid">
        {videos.items.map((video, index) => (
          <article className="video-card" key={video.title}>
            <div className="video-thumb">
              {video.src ? (
                <video controls preload="metadata" playsInline poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : video.poster ? (
                <img src={video.poster} alt="" />
              ) : (
                <div className="video-placeholder" aria-hidden="true">
                  <em>{String(index + 1).padStart(2, "0")}</em>
                  <small>{video.label}</small>
                  <span>{video.title}</span>
                </div>
              )}
              {!video.src ? (
                <button className="placeholder-play" type="button" aria-label={`Lire ${video.title}`}>
                  <span />
                </button>
              ) : null}
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-body">
              <p className="video-label">{video.label}</p>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
