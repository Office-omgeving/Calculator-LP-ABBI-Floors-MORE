import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Richtprijs vloerherstelling | ABBI Industrie",
  description: "Krijg meteen een indicatieve richtprijs voor de herstelling van jouw industriële vloer.",
};

export default function AbbiPage() {
  return <LandingPage brand="abbi" />;
}
