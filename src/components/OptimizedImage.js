import Image from 'next/image';

export default function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 600,
  className = '',
  priority = false,
  objectFit = 'cover',
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
        style={{
          objectFit: objectFit,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
