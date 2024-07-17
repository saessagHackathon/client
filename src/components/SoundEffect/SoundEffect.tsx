export const SoundEffect = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={props.className}
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 168, 168, 0.517343) 51.73%, #FF5757 100%)',
      }}
      {...props}
    />
  )
}
