import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup(props) {
  return (
    <FormControl sx={{ marginTop: "20px", width: "100%" }}>
      <FormLabel id="demo-radio-buttons-group-label">Tea Volume</FormLabel>
      <RadioGroup aria-labelledby="tea_volume" value={props?.tea_volume} name="radio-buttons-group">
        <FormControlLabel
          value="Half cup"
          onChange={(e) => {
            props.setTea_volume(e?.target?.value);
          }}
          control={<Radio />}
          label="Half Cup"
        />
        <FormControlLabel
          value="Full cup"
          onChange={(e) => {
            props.setTea_volume(e?.target?.value);
          }}
          control={<Radio />}
          label="Full Cup"
        />
      </RadioGroup>
    </FormControl>
  );
}
