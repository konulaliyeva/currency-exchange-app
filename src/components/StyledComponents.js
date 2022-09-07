import styled from "@emotion/styled";
import OutlinedInput from "@mui/material/OutlinedInput";

export const StyledContainer = styled("div")`
  padding: 120px 365px;
`;
export const StyledDiv = styled("div")`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
`;
export const StyledBox = styled("div")`
  display: flex;
  justify-content: "center";
  align-content: "center";
  align-items: "center";
  width: 685px;
  padding: 10px 0;
  margin: 32px 0;
  height: 196px;
  border-radius: 20px;
  box-shadow: 1px 1px 6px rgba(14, 87, 214, 0.26);
`;

export const StyledCurrency = styled("div")`
  width: 655px;
  box-shadow: 3px 3px 10px rgba(14, 87, 214, 0.26);
  padding: 18px;
  border-radius: 20px;
  margin-top: 15px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  width: 515px;
  border-radius: 10px 0px 0px 10px;
  margin-left: 20px;
  outline: "none";

 
`;
