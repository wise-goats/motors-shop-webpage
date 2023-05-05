import React, { useState } from "react";
import { iAdvertisement } from "../../../interfaces";
import { iActiveFilter, iFilter } from "..";
import { StyledText, StyledTitle } from "../../../styles/typography";
import { StyledButton } from "../../../styles/button";
import { carros } from "../../../database";
import { FipeApi } from "../../../services/fipeApi";
import { StyledTextInput } from "../../../styles/input";

interface iFiltersComponentProps {
  filters: iFilter;
  setIsFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredAds: React.Dispatch<React.SetStateAction<iAdvertisement[]>>;
  setFilteredModels: React.Dispatch<React.SetStateAction<string[]>>;
  setActiveFilters: React.Dispatch<React.SetStateAction<iActiveFilter>>;
  activeFilters: iActiveFilter;
  filteredAds: iAdvertisement[];
  advertisements: iAdvertisement[];
  filteredModels: string[];
  hide?: boolean;
}

const FiltersComponent = ({
  filters,
  setIsFilterModal,
  setFilteredAds,
  setActiveFilters,
  activeFilters,
  filteredAds,
  filteredModels,
  setFilteredModels,
  hide,
  setIsFiltered,
  advertisements,
}: iFiltersComponentProps) => {
  const [loading, setLoading] = useState(false);
  const [minKm, setMinKm] = useState<number>(0);
  const [maxKm, setMaxKm] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
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
                key={e}
                onClick={async (ev) => {
                  activeFilters.brand === e
                    ? ((activeFilters.brand = undefined), setFilteredModels([]))
                    : (setActiveFilters({ ...activeFilters, brand: e }),
                      setFilteredModels(
                        advertisements
                          .filter((ad) => ad.brand == e)
                          .map((c) => c.model)
                      ),
                      console.log(filteredModels));
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
          {filteredModels.length > 0
            ? filteredModels
                .filter(
                  (atual, index) => filteredModels.indexOf(atual) === index
                )
                .map((e) => {
                  return (
                    <StyledText
                      key={e}
                      onClick={() => {
                        setActiveFilters({ ...activeFilters, model: e });
                      }}
                      fontWeight={500}
                      className={activeFilters.model === e ? "selected" : ""}
                    >
                      {e}
                    </StyledText>
                  );
                })
            : filters.model?.map((e) => {
                return (
                  <StyledText
                    key={e}
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
                key={e}
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
                key={e}
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
                key={e}
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
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Km
        </StyledTitle>
        <ul>
          <input
            type="number"
            placeholder="Minimo"
            onChange={(e) => setMinKm(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Máximo"
            onChange={(e) => setMaxKm(Number(e.target.value))}
          />
        </ul>
      </div>
      <div className="filter-section">
        <StyledTitle fontWeight={500} tag="h4">
          Preço
        </StyledTitle>
        <ul>
          <input
            type="number"
            placeholder="Minimo"
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Máximo"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </ul>
      </div>

      <StyledButton
        buttonSize="big"
        onClick={() => {
          setIsFilterModal(false);
          let filtered: any = advertisements;
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
          if (minKm > 0) {
            filtered = filtered.filter((car: any) => car.mileage >= minKm);
          }
          if (maxKm > 0) {
            filtered = filtered.filter((car: any) => car.mileage <= maxKm);
          }
          if (minPrice > 0) {
            filtered = filtered.filter((car: any) => car.price >= minPrice);
          }
          if (maxPrice > 0) {
            filtered = filtered.filter((car: any) => car.price <= maxPrice);
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
