import styled from "styled-components";

const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  border-radius: 5px;
  width: 312px;
  max-width: 90%;
  height: 356px;

  background-color: var(--grey-8);
  cursor: pointer;

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
    flex-direction: row;

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
  .initialsOfNameInCircle {
    background-color: #fffe1f;
    color: var(--white-fixed);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;

    border-radius: 100%;
    font-size: 26px;
  }
`;

export default StyledProductCard;
