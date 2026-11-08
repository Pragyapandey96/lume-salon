export interface ImageAsset {
  /** Public URL. Files live in `public/images/`. */
  src: string
  /** Describes the photograph once it is in place. */
  alt: string
  /** Intrinsic pixel size of the exported file; reserves layout space. */
  width: number
  height: number
  /** Short brief shown on the placeholder until a photograph is added. */
  label: string
}
