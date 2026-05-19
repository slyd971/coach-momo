import type { CoachPressKit } from "@/data/coachPressKit";

type VideoSectionProps = {
  videos: CoachPressKit["videos"];
};

export function VideoSection({ videos }: VideoSectionProps) {
  const video = videos.items[0];

  return (
    <section className="section" id="videos">
      <div className="section-heading">
        <p className="section-kicker">Videos</p>
        <h2>{videos.title}</h2>
        <p>{videos.subtitle}</p>
      </div>

      <div className="video-showcase">
        <article className="video-card video-card-featured">
          {video ? (
            <div className="video-thumb">
              {video.src ? (
                <video controls preload="metadata" playsInline poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : video.poster ? (
                <img src={video.poster} alt="" />
              ) : (
                <div className="video-placeholder" aria-hidden="true">
                  <em>01</em>
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
          ) : null}
        </article>

        <div className="video-services" aria-label="Types de services proposés">
          {videos.serviceItems.map((item, index) => (
            <article className="video-service-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="video-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.duration ? <p className="video-service-duration">{item.duration}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
