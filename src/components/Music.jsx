"use client";

import { FaSpotify } from "react-icons/fa";
import { SiAmazonmusic, SiApplemusic, SiYoutubemusic } from "react-icons/si";

export default function Music() {
  const streamingPlatforms = [
    {
      name: "Spotify",
      color: "bg-[#1DB954]",
      icon: <FaSpotify className="w-12 h-12 text-white" />,
      link: "https://api.ffm.to/sl/e/ps/when-you-know-it-s-christmas?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxNDIuMC4wLjAiLCJtYWpvciI6IjE0MiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjE0Mi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjY4YTFlNzQzLTkwY2EtNDFhZC1iMjQyLTFjNmNlMmUzMjBmZCIsInNpZCI6IjE0NjFhNjkyLTY1N2MtNGY0YS04M2ExLTU1MDEwNjA2MjdiOCIsImlwIjoiMTUxLjIyNS4xOTIuMjA0IiwicmVmIjoiIiwiaG9zdCI6ImRpdHRvLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiR0IifSwiaXNXZWJwU3VwcG9ydGVkIjp0cnVlLCJnZHByRW5mb3JjZSI6dHJ1ZSwiY291bnRyeUNvZGUiOiJHQiIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiYmYzZTVjNTMtYjAyNy00NWY4LWExMjAtZjg3M2E3NWU5MGI5IiwiaWQiOiI2OTE5M2NiNTM4MDAwMDEwMDA0NGNmZDAiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOnRydWUsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU_Y2xpZW50X2lkPTY2ZDNjZGI0NDgwNzRhMGQ4OGU5YjA4YmFhZjJmM2Q3JnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZhcGkuZmZtLnRvJTJGd2ViaG9vayUyRnNwb3RpZnklMkZhdXRob3JpemUmc2NvcGU9dXNlci1yZWFkLXByaXZhdGUlMjB1c2VyLXJlYWQtYmlydGhkYXRlJTIwdXNlci1yZWFkLWVtYWlsJTIwdXNlci1saWJyYXJ5LW1vZGlmeSUyMHVzZXItbGlicmFyeS1yZWFkJTIwdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCUyMHVzZXItZm9sbG93LXJlYWQlMjB1c2VyLWZvbGxvdy1tb2RpZnklMjB1c2VyLXRvcC1yZWFkJTIwcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyUyMHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSUyMHBsYXlsaXN0LW1vZGlmeS1wcml2YXRlJnN0YXRlPWV5SmtZa3hwYm10SlpDSTZJalk1TVRrelkySTFNemd3TURBd01UQXdNRFEwWTJaa01DSXNJbUZqZEdsdmJsUjVjR1VpT251bGJDd3NJbU4wWVNJNklsQnlaUzFUWVhabElpd2lkWE5sY2tOdmRXNTBjbmtpT2lKSFFpSXNJbk5vYjNKMFNXUWlPaUozYUdWdUxYbHZkUzFyYm05M0xXbDBMWE10WTJoeWFYTjBiV0Z6SWl3aVpHOXRZV2x1SWpvaWFIUjBjSE02THk5a2FYUjBieTVtYlNJc0luTmxjblpwWTJWT1lXMWxJam9pYzNCdmRHbG1lU0lzSW5CeWIyUjFZM1FpT2lKemJXRnlkR3hwYm1zaUxDSnlaV1JwY21WamRGVnlhU0k2SW1oMGRIQnpPaTh2WkdsMGRHOHVabTB2ZDJobGJpMTViM1V0YTI1dmR5MXBkQzF6TFdOb2NtbHpkRzFoY3k5d2NtVnpZWFpsWTJGc2JHSmhZMnNpTENKbVlXeHNZbUZqYTFWeWJDSTZiblZzYkN3aWFYTlFjbVZTWld4bFlYTmxJanAwY25WbExDSnBjMFoxZEhWeVpWSmxiR1ZoYzJVaU9uUnlkV1VzSW1GeWRHbHpkRWxrSWpvaU5XTmhNMkk0TnpJd1pUQXdNREF3WW1Fek9XSmpOR1V5SWl3aVlYSjBhWE4wVDNkdVpYSWlPaUkxWXpVd1lqVXhaREUwTURBd01ERTVNREEyT0RZNE9URWlMQ0poWTNScGIyNUpaQ0k2Ym5Wc2JDd2laMlJ3Y2tWdVptOXlZMlVpT25SeWRXVXNJbXhwYm10VWVYQmxJanB1ZFd4c0xDSjFjMlZ5U1ZBaU9pSXhOVEV1TWpJMUxqRTVNaTR5TURRaUxDSnlaWGRoY21SVmMyVnlTV1FpT201MWJHd3NJbkpsWm1WeWNtRnNTV1FpT201MWJHd3NJblYxYVdRaU9pSmlaak5sTldNMU15MWlNREkzTFRRMVpqZ3RZVEV5TUMxbU9EY3pZVGMxWlRrd1lqa2lmUT09Iiwic3J2YyI6InNwb3RpZnkiLCJwcm9kdWN0Ijoic21hcnRsaW5rIiwic2hvcnRJZCI6IndoZW4teW91LWtub3ctaXQtcy1jaHJpc3RtYXMiLCJpc0F1dGhvcml6YXRpb25SZXF1aXJlZCI6dHJ1ZSwib3duZXIiOiI1YzUwYjUxZDE0MDAwMDE5MDA2ODY4OTEiLCJ0ZW5hbnQiOiI1ZDJjMjk2M2YwZDUxZWViZDI0ZTc3ODciLCJhciI6IjVjYTNiODcyMGUwMDAwMGJhMzliYzRlMiIsImlzU2hvcnRMaW5rIjpmYWxzZSwibmF0aXZlIjpmYWxzZX0",
    },
    {
      name: "Apple Music",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      icon: <SiApplemusic className="w-12 h-12 text-white" />,
      link: "https://api.ffm.to/sl/e/ps/when-you-know-it-s-christmas?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxNDIuMC4wLjAiLCJtYWpvciI6IjE0MiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjE0Mi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjY4YTFlNzQzLTkwY2EtNDFhZC1iMjQyLTFjNmNlMmUzMjBmZCIsInNpZCI6IjE0NjFhNjkyLTY1N2MtNGY0YS04M2ExLTU1MDEwNjA2MjdiOCIsImlwIjoiMTUxLjIyNS4xOTIuMjA0IiwicmVmIjoiIiwiaG9zdCI6ImRpdHRvLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiR0IifSwiaXNXZWJwU3VwcG9ydGVkIjp0cnVlLCJnZHByRW5mb3JjZSI6dHJ1ZSwiY291bnRyeUNvZGUiOiJHQiIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiYmYzZTVjNTMtYjAyNy00NWY4LWExMjAtZjg3M2E3NWU5MGI5IiwiaWQiOiI2OTE5M2NiNTM4MDAwMDEwMDA0NGNmZDAiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOnRydWUsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9hcGkuZmZtLnRvL3dlYmhvb2svYXBwbGUvYXV0aG9yaXplP3N0YXRlPWV5SmtZa3hwYm10SlpDSTZJalk1TVRrelkySTFNemd3TURBd01UQXdNRFEwWTJaa01DSXNJbUZqZEdsdmJsUjVjR1VpT201MWJHd3NJbU4wWVNJNklsQnlaUzFCWkdRaUxDSjFjMlZ5UTI5MWJuUnllU0k2SWtkQ0lpd2ljMmh2Y25SSlpDSTZJbmRvWlc0dGVXOTFMV3R1YjNjdGFYUXRjeTFqYUhKcGMzUnRZWE1pTENKa2IyMWhhVzRpT2lKb2RIUndjem92TDJScGRIUnZMbVp0SWl3aWMyVnlkbWxqWlU1aGJXVWlPaUpoY0hCc1pTSXNJbkJ5YjJSMVkzUWlPaUp6YldGeWRHeHBibXNpTENKeVpXUnBjbVZqZEZWeWFTSTZJbWgwZEhCek9pOHZaR2wwZEc4dVptMHZkMmhsYmkxNWIzVXRhMjV2ZHkxcGRDMXpMV05vY21semRHMWhjeTl3Y21WellYWmxZMkZzYkdKaFkyc2lMQ0ptWVd4c1ltRmphMVZ5YkNJNmJuVnNiQ3dpYVhOUWNtVlNaV3hsWVhObElqcDBjblZsTENKcGMwWjFkSFZ5WlZKbGJHVmhjMlVpT25SeWRXVXNJbUZ5ZEdsemRFbGtJam9pTldOaE0ySTROekl3WlRBd01EQXdZbUV6T1dKak5HVXlJaXdpWVhKMGFYTjBUM2R1WlhJaU9pSTFZelV3WWpVeFpERTBNREF3TURFNU1EQTJPRFk0T1RFaUxDSmhZM1JwYjI1SlpDSTZiblZzYkN3aVoyUndja1Z1Wm05eVkyVWlPblJ5ZFdVc0lteHBibXRVZVhCbElqcHVkV3hzTENKMWMyVnlTVkFpT2lJeE5URXVNakkxTGpFNU1pNHlNRFFpTENKeVpYZGhjbVJWYzJWeVNXUWlPbTUxYkd3c0luSmxabVZ5Y21Gc1NXUWlPbTUxYkd3c0luVjFhV1FpT2lKaVpqTmxOV00xTXkxaU1ESTNMVFExWmpndFlURXlNQzFtT0RjellUYzFaVGt3WWpraWZRPT0iLCJzcnZjIjoiYXBwbGUiLCJwcm9kdWN0Ijoic21hcnRsaW5rIiwic2hvcnRJZCI6IndoZW4teW91LWtub3ctaXQtcy1jaHJpc3RtYXMiLCJpc0F1dGhvcml6YXRpb25SZXF1aXJlZCI6dHJ1ZSwib3duZXIiOiI1YzUwYjUxZDE0MDAwMDE5MDA2ODY4OTEiLCJ0ZW5hbnQiOiI1ZDJjMjk2M2YwZDUxZWViZDI0ZTc3ODciLCJhciI6IjVjYTNiODcyMGUwMDAwMGJhMzliYzRlMiIsImlzU2hvcnRMaW5rIjpmYWxzZSwibmF0aXZlIjpmYWxzZX0",
    },
    {
      name: "YouTube Music",
      color: "bg-[#FF0000]",
      icon: <SiYoutubemusic className="w-12 h-12 text-white" />,
      link: "https://api.ffm.to/sl/e/ps/when-you-know-it-s-christmas?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxNDIuMC4wLjAiLCJtYWpvciI6IjE0MiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjE0Mi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjY4YTFlNzQzLTkwY2EtNDFhZC1iMjQyLTFjNmNlMmUzMjBmZCIsInNpZCI6IjE0NjFhNjkyLTY1N2MtNGY0YS04M2ExLTU1MDEwNjA2MjdiOCIsImlwIjoiMTUxLjIyNS4xOTIuMjA0IiwicmVmIjoiIiwiaG9zdCI6ImRpdHRvLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiR0IifSwiaXNXZWJwU3VwcG9ydGVkIjp0cnVlLCJnZHByRW5mb3JjZSI6dHJ1ZSwiY291bnRyeUNvZGUiOiJHQiIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiYmYzZTVjNTMtYjAyNy00NWY4LWExMjAtZjg3M2E3NWU5MGI5IiwiaWQiOiI2OTE5M2NiNTM4MDAwMDEwMDA0NGNmZDAiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOnRydWUsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGg_YWNjZXNzX3R5cGU9b2ZmbGluZSZpbmNsdWRlX2dyYW50ZWRfc2NvcGVzPXRydWUmc3RhdGU9ZXlKa1lreHBibXRKWkNJNklqWTVNVGt6WTJJMU16Z3dNREF3TVRBd01EUTBZMlprTUNJc0ltRmpkR2x2YmxSNWNHVWlPbTUxYkd3c0ltTjBZU0k2SWxCeVpTMVRZWFpsSWl3aWRYTmxja052ZFc1MGNua2lPaUpIUWlJc0luTm9iM0owU1dRaU9pSjNhR1Z1TFhsdmRTMXJibTkzTFdsMExYTXRZMmh5YVhOMGJXRnpJaXdpWkc5dFlXbHVJam9pYUhSMGNITTZMeTlrYVhSMGJ5NW1iU0lzSW5ObGNuWnBZMlZPWVcxbElqb2llVzkxZEhWaVpXMTFjMmxqSWl3aWNISnZaSFZqZENJNkluTnRZWEowYkdsdWF5SXNJbkpsWkdseVpXTjBWWEpwSWpvaWFIUjBjSE02THk5a2FYUjBieTVtYlM5M2FHVnVMWGx2ZFMxcmJtOTNMV2wwTFhNdFkyaHlhWE4wYldGekwzQnlaWE5oZG1WallXeHNZbUZqYXlJc0ltWmhiR3hpWVdOclZYSnNJanB1ZFd4c0xDSnBjMUJ5WlZKbGJHVmhjMlVpT25SeWRXVXNJbWx6Um5WMGRYSmxVbVZzWldGelpTSTZkSEoxWlN3aVlYSjBhWE4wU1dRaU9pSTFZMkV6WWpnM01qQmxNREF3TURCaVlUTTVZbU0wWlRJaUxDSmhjblJwYzNSUGQyNWxjaUk2SWpWak5UQmlOVEZrTVRRd01EQXdNVGt3TURZNE5qZzVNU0lzSW1GamRHbHZia2xrSWpwdWRXeHNMQ0puWkhCeVJXNW1iM0pqWlNJNmRISjFaU3dpYkdsdWExUjVjR1VpT201MWJHd3NJblZ6WlhKSlVDSTZJakUxTVM0eU1qVXVNVGt5TGpJd05DSXNJbkpsZDJGeVpGVnpaWEpKWkNJNmJuVnNiQ3dpY21WbVpYSnlZV3hKWkNJNmJuVnNiQ3dpZFhWcFpDSTZJbUptTTJVMVl6VXpMV0l3TWpjdE5EVm1PQzFoTVRJd0xXWTROek5oTnpWbE9UQmlPU0o5JnJlc3BvbnNlX3R5cGU9Y29kZSZjb25zZW50PVBsZWFzZSUyMGFsbG93JnByb21wdD1jb25zZW50JnNjb3BlPWh0dHBzJTNBJTJGJTJGd3d3Lmdvb2dsZWFwaXMuY29tJTJGYXV0aCUyRnlvdXR1YmUlMjBodHRwcyUzQSUyRiUyRnd3dy5nb29nbGVhcGlzLmNvbSUyRmF1dGglMkZ1c2VyaW5mby5wcm9maWxlJTIwaHR0cHMlM0ElMkYlMkZ3d3cuZ29vZ2xlYXBpcy5jb20lMkZhdXRoJTJGdXNlcmluZm8uZW1haWwlMjBodHRwcyUzQSUyRiUyRnd3dy5nb29nbGVhcGlzLmNvbSUyRmF1dGglMkZtdXNpYyZjbGllbnRfaWQ9NzY3ODI3OTIzMDI3LWhna2phZmpiamkxMnVydXZsaTV0OXFsbWRhdGtwdjIyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRmFwaS5mZm0udG8lMkZ3ZWJob29rJTJGeW91dHViZSUyRmF1dGhvcml6ZSIsInNydmMiOiJ5b3V0dWJlbXVzaWMiLCJwcm9kdWN0Ijoic21hcnRsaW5rIiwic2hvcnRJZCI6IndoZW4teW91LWtub3ctaXQtcy1jaHJpc3RtYXMiLCJpc0F1dGhvcml6YXRpb25SZXF1aXJlZCI6dHJ1ZSwib3duZXIiOiI1YzUwYjUxZDE0MDAwMDE5MDA2ODY4OTEiLCJ0ZW5hbnQiOiI1ZDJjMjk2M2YwZDUxZWViZDI0ZTc3ODciLCJhciI6IjVjYTNiODcyMGUwMDAwMGJhMzliYzRlMiIsImlzU2hvcnRMaW5rIjpmYWxzZSwibmF0aXZlIjpmYWxzZX0ga",
    },
    {
      name: "Amazon Music",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      icon: <SiAmazonmusic className="w-12 h-12 text-white" />,
      link: "https://api.ffm.to/sl/e/ps/when-you-know-it-s-christmas?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiIxNDIuMC4wLjAiLCJtYWpvciI6IjE0MiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IkJsaW5rIiwidmVyc2lvbiI6IjE0Mi4wLjAuMCJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjY4YTFlNzQzLTkwY2EtNDFhZC1iMjQyLTFjNmNlMmUzMjBmZCIsInNpZCI6IjE0NjFhNjkyLTY1N2MtNGY0YS04M2ExLTU1MDEwNjA2MjdiOCIsImlwIjoiMTUxLjIyNS4xOTIuMjA0IiwicmVmIjoiIiwiaG9zdCI6ImRpdHRvLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiR0IifSwiaXNXZWJwU3VwcG9ydGVkIjp0cnVlLCJnZHByRW5mb3JjZSI6dHJ1ZSwiY291bnRyeUNvZGUiOiJHQiIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiYmYzZTVjNTMtYjAyNy00NWY4LWExMjAtZjg3M2E3NWU5MGI5IiwiaWQiOiI2OTE5M2NiNTM4MDAwMDEwMDA0NGNmZDAiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOnRydWUsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9vYT9jbGllbnRfaWQ9YW16bjEuYXBwbGljYXRpb24tb2EyLWNsaWVudC5mZTQ3NTgyOWMwZDA0OTM1YjJjOTRkY2RhYWU0ZDk2NyZzY29wZT1wcm9maWxlJnJlc3BvbnNlX3R5cGU9Y29kZSZzdGF0ZT1leUprWWt4cGJtdEpaQ0k2SWpZNU1Ua3pZMkkxTXpnd01EQXdNVEF3TURRMFkyWmtNQ0lzSW1GamRHbHZibFI1Y0dVaU9tNTFiR3dzSW1OMFlTSTZJbEJ5WlMxVFlYWmxJaXdpZFhObGNrTnZkVzUwY25raU9pSkhRaUlzSW5Ob2IzSjBTV1FpT2lKM2FHVnVMWGx2ZFMxcmJtOTNMV2wwTFhNdFkyaHlhWE4wYldGeklpd2laRzl0WVdsdUlqb2lhSFIwY0hNNkx5OWthWFIwYnk1bWJTSXNJbk5sY25acFkyVk9ZVzFsSWpvaVlXMWhlbTl1SWl3aWNISnZaSFZqZENJNkluTnRZWEowYkdsdWF5SXNJbkpsWkdseVpXTjBWWEpwSWpvaWFIUjBjSE02THk5a2FYUjBieTVtYlM5M2FHVnVMWGx2ZFMxcmJtOTNMV2wwTFhNdFkyaHlhWE4wYldGekwzQnlaWE5oZG1WallXeHNZbUZqYXlJc0ltWmhiR3hpWVdOclZYSnNJanB1ZFd4c0xDSnBjMUJ5WlZKbGJHVmhjMlVpT25SeWRXVXNJbWx6Um5WMGRYSmxVbVZzWldGelpTSTZkSEoxWlN3aVlYSjBhWE4wU1dRaU9pSTFZMkV6WWpnM01qQmxNREF3TURCaVlUTTVZbU0wWlRJaUxDSmhjblJwYzNSUGQyNWxjaUk2SWpWak5UQmlOVEZrTVRRd01EQXdNVGt3TURZNE5qZzVNU0lzSW1GamRHbHZia2xrSWpwdWRXeHNMQ0puWkhCeVJXNW1iM0pqWlNJNmRISjFaU3dpYkdsdWExUjVjR1VpT201MWJHd3NJblZ6WlhKSlVDSTZJakUxTVM0eU1qVXVNVGt5TGpJd05DSXNJbkpsZDJGeVpGVnpaWEpKWkNJNmJuVnNiQ3dpY21WbVpYSnlZV3hKWkNJNmJuVnNiQ3dpZFhWcFpDSTZJbUptTTJVMVl6VXpMV0l3TWpjdE5EVm1PQzFoTVRJd0xXWTROek5oTnpWbE9UQmlPU0o5JnJlZGlyZWN0X3VyaT1odHRwczovL2FwaS5mZm0udG8vd2ViaG9vay9hbWF6b25tdXNpYy9hdXRob3JpemUiLCJzcnZjIjoiYW1hem9uIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiJ3aGVuLXlvdS1rbm93LWl0LXMtY2hyaXN0bWFzIiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOnRydWUsIm93bmVyIjoiNWM1MGI1MWQxNDAwMDAxOTAwNjg2ODkxIiwidGVuYW50IjoiNWQyYzI5NjNmMGQ1MWVlYmQyNGU3Nzg3IiwiYXIiOiI1Y2EzYjg3MjBlMDAwMDBiYTM5YmM0ZTIiLCJpc1Nob3J0TGluayI6ZmFsc2UsIm5hdGl2ZSI6ZmFsc2V9",
    },
  ];

  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Listen Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Download &ldquo;When You Know It&rsquo;s Christmas&rdquo; on your
            favorite platform
          </p>
          <p className="text-sm text-gray-600 max-w-2xl font-regular py-3 mx-auto">
            One download is worth 100 streams, so please support us on our way
            to a chart topping hit by downloading
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              When You Know It&rsquo;s Christmas
            </h3>
            <p className="text-lg text-gray-600">
              Lucky Skies feat. Stagecoach
            </p>
          </div>

          {/* Ditto Embed */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl p-8 text-center">
              <a
                href="https://ditto.fm/when-you-know-it-s-christmas/presavecallback?context=pre_save&service=spotify&redirecturl&actionid&order=6924910ca25e1ee52e6c8b52&fpEnabled=false&user=Captain%20T&status=success&origin=presavecallback"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download on All Platforms
              </a>
              <p className="text-white mt-4 text-sm">
                Available on Spotify, Apple Music, YouTube Music, and more
              </p>
            </div>
          </div>

          {/* Streaming platforms with logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streamingPlatforms.map((platform, index) => (
              <a href={platform.link} key={index} target="_blank">
                <div
                  className={`${platform.color} rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center`}
                >
                  {platform.icon}
                  <p className="text-white font-semibold mt-3 text-sm">
                    {platform.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
