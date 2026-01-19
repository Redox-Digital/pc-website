import css from './IntroVideo.module.scss';

type Props = {
  videoUrl: string;
  mobileUrl: string;
  imgUrl: string;
};

export default function IntroVideo({ videoUrl, imgUrl, mobileUrl }: Props) {
  const video: string = `<video
  class="${css.desktop}"
      autoplay
      loop
      aria-hidden
      playsinline
      muted="true"
      poster="${imgUrl}"
    >
      <source
        src="${videoUrl}"
        type="video/mp4"
      />
    </video><video
    class="${css.mobile}"
    autoplay
    loop
    aria-hidden
    playsinline
    muted="true"
    poster="${imgUrl}"
  >
    <source
      src="${mobileUrl}"
      type="video/mp4"
    />
  </video>`;

  return <div className={css.video} dangerouslySetInnerHTML={{ __html: video }}></div>;
}
