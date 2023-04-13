import styled from "styled-components";

const StyledProductCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  border-radius: 5px;
  width: 300px;
  height: 400px;

  background-color: var(--grey-8);

  .productInfoMain {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .productImage {
      display: block;
      background-color: var(--grey-0);
      width: 100%;
      object-fit: cover;
      height: 125px;
    }

    .productTitle {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .productDescription {
      max-height: 100px;
      overflow-y: scroll;
    }
  }

  .advertiserSection {
    display: flex;
    gap: 10px;

    .advertiserName {
      font-size: 1rem;
    }

    .advertiserImage {
      display: block;
      object-fit: cover;
      height: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .cardFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #kmAndYearDiv {
      display: flex;
      gap: 10px;

      .specialText {
        padding: 8px;
        background-color: var(--brand-4);
        color: var(--brand-1);
      }
    }
  }
`;

export default StyledProductCard;
