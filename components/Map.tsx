import style from '@/styles/components/Map.module.scss';

export default function Map() {
  return (
    <>
      <iframe
        className={style.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.2157695311266!2d6.8382876156854415!3d46.95745047914695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478de0e96dd9c54f%3A0xb60659bd0ce71e2d!2sParis%20%26%20Comtesse%20SA!5e0!3m2!1sfr!2sch!4v1680170519254!5m2!1sfr!2sch"
        height="400"
        loading="lazy"
      ></iframe>
    </>
  );
}
