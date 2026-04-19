/**
 * Unsplash görselleri — https://unsplash.com/license
 * Hero: yerel `public/hero-jannik.jpg`
 */
export function tennisPhoto(id: string, width: number) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
}

/** Bazı topluluk çekimleri `flagged` yolunda — aynı CDN, Unsplash lisansı */
export function tennisPhotoFlagged(id: string, width: number) {
  return `https://images.unsplash.com/flagged/photo-${id}?auto=format&fit=crop&w=${width}&q=85`;
}

/** Kortta tenis oynayan oyuncu — luthfian alfajr / Unsplash */
export const IMG_PLAYER_ACTION = "1768637757353-57c498a225b7";
/** Monte Carlo kort, iki oyuncu — Ashwin Tanjore / Unsplash */
export const IMG_CLUB_DOUBLES = "1723467085008-f5b21eed322a";
/** Açık hava kortu — Mathias Reding / Unsplash */
export const IMG_COURT_OUTDOOR = "1725714834665-798effa1177e";
/** Gece aydınlatmalı kort — Sebastian Qin / Unsplash */
export const IMG_COURT_NIGHT = "1710782914858-9324a4c09c4a";
/** Ağaçlarla çevrili kortlar — havadan — Unsplash */
export const IMG_COURT_AERIAL = "1499510318569-1a3d67dc3976";
/** Kortta raket ve top — Unsplash */
export const IMG_RACKET_BALL_FIELD = "1542144582-1ba00456b5e3";
/** Yeşil tenis kortu — Unsplash */
export const IMG_GREEN_COURT = "1578966663421-00f3bfebfa89";
/** Gri-beyaz kort çizgileri — Unsplash */
export const IMG_HARD_COURT_LINES = "1547934045-2942d193cb49";
/** Kort üzerinde raket ve dört top — seviye / derecelendirme hissi — Unsplash */
export const IMG_RACKET_MULTIBALL = "1632755898125-36cd72575dde";
/** Kortta sarı top — net katılım / “oynam var” sinyali — Unsplash */
export const IMG_BALL_ON_LINE = "1541744573515-478c959628a0";
/** Gündüz çiftler maçı, dört oyuncu — seçim / taraflar — Unsplash (flagged) */
export const IMG_DOUBLES_GROUP = "1576972405668-2d020a01cbfa";
/** Raket ve topu elinde tutan oyuncu — eşleşmeye hazır — Unsplash */
export const IMG_READY_TO_PAIR = "1545809074-59472b3f5ecc";

export const media = {
  hero: "/hero-jannik.jpg",
  why: tennisPhoto(IMG_CLUB_DOUBLES, 1400),

  /** Tenisin renkleri ve ritmi — dörtü farklı, doğrudan kort/raket/top */
  gallery: [
    tennisPhoto(IMG_COURT_AERIAL, 900),
    tennisPhoto(IMG_RACKET_BALL_FIELD, 900),
    tennisPhoto(IMG_GREEN_COURT, 900),
    tennisPhoto(IMG_HARD_COURT_LINES, 900),
  ] as const,

  /**
   * Nasıl çalışır — sırayla: Anket → Seçim → Eşleştirme → Oyna
   * Hepsi doğrudan tenis / kort bağlamında, birbirinden farklı sahneler.
   */
  howStepSrc: [
    tennisPhoto(IMG_BALL_ON_LINE, 800),
    tennisPhotoFlagged(IMG_DOUBLES_GROUP, 800),
    tennisPhoto(IMG_READY_TO_PAIR, 800),
    tennisPhoto(IMG_PLAYER_ACTION, 800),
  ] as const,

  /** Yol haritası: [0] derecelendirme, [1] turnuvalar */
  roadmap: [
    tennisPhoto(IMG_RACKET_MULTIBALL, 1200),
    tennisPhoto(IMG_COURT_NIGHT, 1200),
  ] as const,
};
