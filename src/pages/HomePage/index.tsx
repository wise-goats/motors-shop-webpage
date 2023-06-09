import React, { useEffect, useState } from "react";
import { StyledButton } from "../../styles/button";
import Modal from "../../components/Modal";
import Form from "../../components/form";
import { StyledText, StyledTitle } from "../../styles/typography";
import Input from "../../components/input";
// import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/banner.png";
import ProductList from "../../components/ProductList";
import ProductCard from "../../components/ProductCard";
import { StyledHomePage } from "./style";
import { carros } from "../../database";
import { iAdvertisement } from "../../interfaces";
import FiltersComponent from "./FiltersComponent";
import { useAuthContext } from "../../contexts/AuthContext";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface iFilter {
  brand: string[];
  model: string[];
  color: string[];
  year: number[];
  fuel: number[];
  mileage: { min?: number | undefined; max?: number | undefined };
  price: { min?: number | undefined; max?: number | undefined };
}

export interface iActiveFilter {
  [key: string]: string | number | undefined | object;
  brand?: string | undefined;
  model?: string | undefined;
  color?: string | undefined;
  year?: number | undefined;
  fuel?: number | undefined;
  mileage?: { min?: number | undefined; max?: number | undefined };
  price?: { min?: number | undefined; max?: number | undefined };
}

export default () => {
  useEffect(() => {
    async function getAds() {
      try {
        const res = await Api.get("/advertisement");
        setAdvertisements(res.data);
        let ads: iAdvertisement[] = res.data;
        let filter: iFilter = {
          brand: [],
          model: [],
          color: [],
          year: [],
          fuel: [],
          mileage: { min: 0, max: 0 },
          price: { min: 0, max: 0 },
        };

        ads.forEach((car) => {
          if (!filter.brand?.includes(car.brand)) {
            filter.brand = [...filter.brand, car.brand];
          }
          if (!filter.model?.includes(car.model)) {
            filter.model = [...filter.model, car.model];
          }
          if (!filter.color?.includes(car.color)) {
            filter.color = [...filter.color, car.color];
          }
          if (!filter.year?.includes(car.year)) {
            filter.year = [...filter.year, car.year];
          }
          if (!filter.fuel?.includes(car.fuel)) {
            filter.fuel = [...filter.fuel, car.fuel];
          }
        });
        setFilters(filter);
      } catch (error) {
        console.log(error);
      }
    }
    getAds();
  }, []);

  const { user } = useAuthContext();
  const [advertisements, setAdvertisements] = useState<iAdvertisement[]>([]);
  const [isFilterModal, setIsFilterModal] = useState<boolean>(false);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filters, setFilters] = useState<iFilter>({} as iFilter);
  const [filteredAds, setFilteredAds] = useState<iAdvertisement[]>([]);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<iActiveFilter>(
    {} as iActiveFilter
  );
  const [pages, setPages] = useState<number>(0);
  const [actualPage, setActualPage] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAds() {
      try {
        const res = await Api.get(`/advertisement/?page=${actualPage}`);
        setAdvertisements(res.data.data);
        setPages(res.data.pages);
        setActualPage(res.data.actualPage);
        let ads: iAdvertisement[] = res.data.data;
        let filter: iFilter = {
          brand: [],
          model: [],
          color: [],
          year: [],
          fuel: [],
          mileage: { min: undefined, max: undefined },
          price: { min: undefined, max: undefined },
        };

        ads.forEach((car) => {
          if (!filter.brand?.includes(car.brand)) {
            filter.brand = [...filter.brand, car.brand];
          }
          if (!filter.model?.includes(car.model)) {
            filter.model = [...filter.model, car.model];
          }
          if (!filter.color?.includes(car.color)) {
            filter.color = [...filter.color, car.color];
          }
          if (!filter.year?.includes(car.year)) {
            filter.year = [...filter.year, car.year];
          }
          if (!filter.fuel?.includes(car.fuel)) {
            filter.fuel = [...filter.fuel, car.fuel];
          }
        });
        setFilters(filter);
      } catch (error) {
        console.log(error);
      }
    }
    getAds();
  }, [actualPage]);

  const handleModal = () => {
    setIsFilterModal(!isFilterModal);
  };

  return (
    <StyledHomePage>
      <Banner />
      <div className="advertisements">
        <div className="flex">
          <ProductList>
            {isFiltered
              ? filteredAds.map((car) => (
                  <ProductCard key={car.id} advertisement={car} />
                ))
              : advertisements.length > 0 &&
                advertisements.map((car) => (
                  <ProductCard key={car.id} advertisement={car} />
                ))}
          </ProductList>
          <StyledButton
            buttonSize="big"
            className="filtersBtn"
            onClick={() => {
              setIsFilterModal(true);
            }}
          >
            Filtros
          </StyledButton>
          <div className="pages">
            {actualPage > 1 && (
              <button
                className="brand1"
                onClick={() => setActualPage(actualPage - 1)}
              >
                Anterior
              </button>
            )}
            <p>
              {actualPage} de {pages}
            </p>
            {actualPage < pages && (
              <button
                className="brand1"
                onClick={() => setActualPage(actualPage + 1)}
              >
                Seguinte
              </button>
            )}
          </div>
        </div>
        {isFilterModal ? (
          <Modal
            title="Filtros"
            handleModal={handleModal}
            className="filters-modal"
          >
            <FiltersComponent
              filters={filters}
              setIsFilterModal={setIsFilterModal}
              setFilteredAds={setFilteredAds}
              setActiveFilters={setActiveFilters}
              activeFilters={activeFilters}
              filteredAds={filteredAds}
              setIsFiltered={setIsFiltered}
              filteredModels={filteredModels}
              setFilteredModels={setFilteredModels}
              advertisements={advertisements}
              isFiltered={isFiltered}
            />
          </Modal>
        ) : (
          <FiltersComponent
            filters={filters}
            setIsFilterModal={setIsFilterModal}
            setFilteredAds={setFilteredAds}
            setActiveFilters={setActiveFilters}
            activeFilters={activeFilters}
            filteredAds={filteredAds}
            setIsFiltered={setIsFiltered}
            filteredModels={filteredModels}
            setFilteredModels={setFilteredModels}
            advertisements={advertisements}
            hide={true}
            isFiltered={isFiltered}
          />
        )}
      </div>
    </StyledHomePage>
  );
};
