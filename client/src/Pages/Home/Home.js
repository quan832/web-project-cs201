import React from "react";

import MovieSection from "../../module/movie/components/MovieSection/MovieSection";
import Banner from "../../Components/Banner/Banner";
import TicketSearch from "../../module/ticket/Components/TicketSearch/TicketSearch";

export default function Home() {
  return (
    <div>
      <Banner />
      <TicketSearch />
      <MovieSection />
    </div>
  );
}
