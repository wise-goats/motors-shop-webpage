import React from "react";
import { iAdvertisement } from "../../../interfaces";
import { iActiveFilter, iFilter } from "..";
import { StyledText, StyledTitle } from "../../../styles/typography";
import { StyledButton } from "../../../styles/button";
import { carros } from "../../../database";

interface iFiltersComponentProps {
  filters: iFilter;
  setIsFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredAds: React.Dispatch<React.SetStateAction<iAdvertisement[]>>;
  setActiveFilters: React.Dispatch<React.SetStateAction<iActiveFilter>>;
  activeFilters: iActiveFilter;
  filteredAds: iAdvertisement[];
  hide?: boolean;
}

const FiltersComponent = ({
  filters,
  setIsFilterModal,
  setFilteredAds,
  setActiveFilters,
  activeFilters,
  filteredAds,
  hide,
  setIsFiltered,
}: iFiltersComponentProps) => {
  return (
    <section className={hide ? "filters hide" : "filters"}>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Marca
        </StyledTitle>
        <ul>
          {filters.brand?.map((e) => {
            return (
              <StyledText
                onClick={(ev) => {
                  activeFilters.brand === e
                    ? (activeFilters.brand = undefined)
                    : setActiveFilters({ ...activeFilters, brand: e });

                  console.log(activeFilters);
                }}
                fontWeight={500}
                className={activeFilters.brand === e ? "selected" : ""}
              >
                {e}
              </StyledText>
            );
          })}
        </ul>
      </div>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Modelo
        </StyledTitle>
        <ul>
          {filters.model?.map((e) => {
            return (
              <StyledText
                onClick={() => {
                  setActiveFilters({ ...activeFilters, model: e });
                }}
                fontWeight={500}
                className={activeFilters.model === e ? "selected" : ""}
              >
                {e}
              </StyledText>
            );
          })}
        </ul>
      </div>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Cor
        </StyledTitle>
        <ul>
          {filters.color?.map((e) => {
            return (
              <StyledText
                onClick={() => {
                  setActiveFilters({ ...activeFilters, color: e });
                }}
                fontWeight={500}
                className={activeFilters.color === e ? "selected" : ""}
              >
                {e}
              </StyledText>
            );
          })}
        </ul>
      </div>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Ano
        </StyledTitle>
        <ul>
          {filters.year?.map((e) => {
            return (
              <StyledText
                onClick={() => {
                  setActiveFilters({ ...activeFilters, year: e });
                }}
                fontWeight={500}
                className={activeFilters.year === e ? "selected" : ""}
              >
                {e}
              </StyledText>
            );
          })}
        </ul>
      </div>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Combústivel
        </StyledTitle>
        <ul>
          {filters.fuel?.map((e) => {
            return (
              <StyledText
                onClick={() => {
                  setActiveFilters({ ...activeFilters, fuel: e });
                }}
                fontWeight={500}
                className={activeFilters.fuel === e ? "selected" : ""}
              >
                {e === 1
                  ? "flex"
                  : e === 2
                  ? "gasolina"
                  : e === 3
                  ? "alcool"
                  : "diesel"}
              </StyledText>
            );
          })}
        </ul>
      </div>

      <StyledButton
        buttonSize="big"
        onClick={() => {
          setIsFilterModal(false);
          let filtered: any = carros;
          if (activeFilters.brand) {
            filtered = filtered.filter(
              (car: any) => car.brand == activeFilters.brand
            );
          }
          if (activeFilters.model) {
            filtered = filtered.filter(
              (car: any) => car.model == activeFilters.model
            );
          }
          if (activeFilters.color) {
            filtered = filtered.filter(
              (car: any) => car.color == activeFilters.color
            );
          }
          if (activeFilters.year) {
            filtered = filtered.filter(
              (car: any) => car.year == activeFilters.year
            );
          }
          if (activeFilters.fuel) {
            filtered = filtered.filter(
              (car: any) => car.fuel == activeFilters.fuel
            );
          }

          setFilteredAds(filtered);
          if (
            !activeFilters.brand &&
            !activeFilters.model &&
            !activeFilters.color &&
            !activeFilters.year &&
            !activeFilters.fuel
          ) {
            setIsFiltered(false);
          } else {
            setIsFiltered(true);
          }
        }}
      >
        Ver anuncios
      </StyledButton>
    </section>
  );
};

export default FiltersComponent;
