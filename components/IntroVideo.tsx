type Props = {
  url: string;
};

export default function IntroVideo({ url }: Props) {
  return (
    <video autoPlay muted loop aria-hidden>
      <source src={url} type="video/mp4" />
    </video>
  );
}
