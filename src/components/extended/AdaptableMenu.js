import React, { useState, useContext } from 'react';

import AdaptableBox from '../adaptable/AdaptableBox';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    Drawer,
    IconButton,
    makeStyles,
    Typography,
    Divider,
    FormControl,
    Switch,
    FormControlLabel,
    RadioGroup,
    Radio,
    Select,
} from '@material-ui/core';
import AdaptableContext from '../../utils/adaptableContext';
import AdaptableButton from '../adaptable/AdaptableButton';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AdaptablePaper from '../adaptable/AdaptablePaper';
import AdaptableTypography from '../adaptable/AdaptableTypography';
import AdaptableSlider from '../adaptable/AdaptableSlider';
import AdaptableListItem from '../adaptable/AdaptableListItem';


const useStyles = makeStyles(() => ({
    root: {
        margin: "5px",
        top: "auto",
        height: "calc(100vh - 100px)",
        width: "25%",
        overflowY: "scroll"
    },
    paper: {
        padding: "10px",
    },
    mark: {
        color: "#FFFFFF"
    },
    darkModeSelect: {
        backgroundColor: "#002984",
        "&$selected": {
            backgroundColor: "#0055B9"
        },
        "&:hover": {
            backgroundColor: "#0055B9"
        },
        "&:focus": {
            backgroundColor: "#0055B9"
        }
    },
    lightModeSelect: {
        backgroundColor: "#0055B9",
        "&$selected": {
            backgroundColor: "#0055B9"
        },
        "&:hover": {
            backgroundColor: "#002984"
        },
        "&:focus": {
            backgroundColor: "#002984"
        }
    },
    toggleDarkMode: {
        "&&": {
            backgroundColor: '#002984',
            borderColor: 'white',
        }
    },
    toggleLightMode: {
        "&&": {
            backgroundColor: '#0055B9',
            borderColor: 'white'
        }
    },

    ListItem: {
        root: {
            "&$selected": {
              backgroundColor: "primary",
              color: "primary",
              "& .MuiListItemIcon-root": {
                color: "primary"
              }
            },
            "&$selected:hover": {
              backgroundColor: "secondary",
              color: "secondary",
              "& .MuiListItemIcon-root": {
                color: "secondary"
              }
            },
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
              "& .MuiListItemIcon-root": {
                color: "white"
              }
            }
        }

    },

}));

export default function AdaptableMenu(props) {
    const { darkMode, setDarkMode } = useContext(AdaptableContext);
    const { showAdaptableMenu, setShowAdaptableMenu } = props.adaptableMenuState;
    const classes = useStyles();
    const [initialQuestion, setInitialQuestionAnswer] = useState(null);
    const [surveyQuestions, setSurveyQuestions] = useState({
        photophobic: null,
        lowLanguageProficiency: null,
        lowVision: null,
        ADHD: null,
        elderly: null
    });

    const onChangeSurveyQuestions = (value, name) => {
        const updatedSurveyQuestions = { ...surveyQuestions };
        updatedSurveyQuestions[name] = value;
        setSurveyQuestions(updatedSurveyQuestions);
    }

    const handleSettings = () => {
        //surveyQuestions["lowVision"] -> call function to set text size as large if true
        surveyQuestions["photophobic"] && !darkMode && setDarkMode(true);
        //surveyQuestions["lowLanguageProficiency"] -> call function to set simplicity of text, if true
        //surveyQuestions["ADHD"] -> call function to minimize elements if true
        //surveyQuestions["elderly"] -> call function to set text size as large if true, and minimise the unnecessary elements
    }

    return (

        <Drawer
            classes={{
                paper: classes.root
            }}
            variant="persistent"
            anchor="right"
            open={showAdaptableMenu}>
            <AdaptableBox>
                <IconButton color="inherit" onClick={() => setShowAdaptableMenu(false)}>
                    <Typography align="right">Hide Menu</Typography>
                    <ChevronRightIcon />
                </IconButton>
            </AdaptableBox>
            <Divider />
            <AdaptablePaper className={classes.paper}>
                <Typography variant="h6"><b>Accessibility Menu</b></Typography>
                <br />
                <Typography paragraph align="justify">Would you like to go directly to accessibility settings, or answer a survey so we can enhance your user experience?</Typography>
                <ToggleButtonGroup
                    value={initialQuestion}
                    exclusive
                    onChange={(event, value) => setInitialQuestionAnswer(value)}
                    aria-label="text alignment"
                    sx={{ width: '75%' }}
                >
                    <ToggleButton value="settings" aria-label="centered" classes={darkMode ? { selected: classes.toggleDarkMode } : { selected: classes.toggleLightMode }}>
                        <AdaptableTypography>Go to settings</AdaptableTypography>
                    </ToggleButton>
                    <ToggleButton value="survey" aria-label="left aligned" classes={darkMode ? { selected: classes.toggleDarkMode } : { selected: classes.toggleLightMode }}>
                        <AdaptableTypography>Answer questions</AdaptableTypography>
                    </ToggleButton>
                </ToggleButtonGroup>
                <br />
                <br />
                {initialQuestion === 'settings' && (
                    <>
                        <Typography variant="h6">Settings</Typography>
                        <br />
                        <FormControl component="fieldset">
                            <Typography paragraph>Contrast</Typography>
                            <FormControlLabel 
                                value={darkMode}
                                checked={darkMode}
                                control={<Switch color={darkMode ? "secondary" : "primary"}/>}
                                label="Dark mode"
                                labelPlacement="end"
                                onChange={e => setDarkMode(!darkMode)}
                            />
                            <br />
                            <Typography paragraph>Text size</Typography>
                            <div style={{ marginLeft: '20px' }}>
                                <AdaptableSlider
                                    aria-label="TextSize"
                                    defaultValue={50}
                                    valueLabelDisplay="auto"
                                    step={50} //change this to read the text size from context
                                    marks={[{ value: 0, label: 'Small' }, { value: 50, label: 'Normal' }, { value: 100, label: 'Large' }]}
                                    min={0}
                                    max={100}
                                    onChange={(e) => console.log(e)}//change this to update the text size in context
                                    classes={{ markLabel: classes.mark }}
                                />
                            </div>
                            <br />
                            <Typography paragraph>Non-essential page elements</Typography>
                            <FormControlLabel
                                value={false} //change this to read boolean hide from context
                                control={<Switch color={darkMode ? "secondary" : "primary"} />}
                                label="Hide"
                                labelPlacement="end"
                                onChange={e => console.log("Clicked me")} //change this to set the boolean hide value
                            />
                            <br />
                            <Typography paragraph>English language proficiency</Typography>
                            <FormControlLabel
                                value={false} //change this to read boolean easyTextMode from context
                                control={<Switch color={darkMode ? "secondary" : "primary"} />}
                                label="Easy mode"
                                labelPlacement="end"
                                onChange={e => console.log("Clicked me")} //change this to set the boolean easyTextMode value
                            />
                            <br />
                            <Typography paragraph>Font style</Typography>
                            <Select 
                                value={"standard"} //change this to read font from context
                                variant="outlined"
                                onChange={e => console.log(e)} //change this to set the font style value
                                className={darkMode ? classes.darkModeSelect : classes.lightModeSelect}
                                MenuProps={{
                                    MenuListProps: {
                                      disablePadding: true
                                  }}}                                
                            >
                                <AdaptableListItem value={'standard'} > 
                                    <AdaptableTypography style={{backgroundColor: "inherit"}} >Standard font</AdaptableTypography>
                                </AdaptableListItem>
                                <AdaptableListItem value={'adhd font'}>
                                    <AdaptableTypography style={{backgroundColor: "inherit"}}>ADHD/Dyslexia-friendly font</AdaptableTypography>
                                </AdaptableListItem>
                            </Select>
                        </FormControl>
                    </>
                )}
                {initialQuestion === 'survey' && (
                    <>
                        <Typography variant="h6">Survey</Typography>
                        <br />
                        <Typography paragraph>Do you have low vision?</Typography>
                        <RadioGroup row aria-label="lowVision" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "lowVision")} value={surveyQuestions["lowVision"]}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["lowVision"] && <Typography paragraph><i>Ok, we will increase text size.</i></Typography>}
                        <br />
                        <Typography paragraph>Do you have photophobia (sensitivity to light)?</Typography>
                        <RadioGroup row aria-label="photophobic" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "photophobic")} value={surveyQuestions["photophobic"]}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["photophobic"] && <Typography paragraph><i>Ok, we will activate dark mode.</i></Typography>}
                        <br />
                        <Typography paragraph>Do you have a low level of language proficiency?</Typography>
                        <RadioGroup row aria-label="lowLanguageProficiency" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "lowLanguageProficiency")} value={surveyQuestions["lowLanguageProficiency"]}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["lowLanguageProficiency"] && <Typography paragraph><i>Ok, we will simplify the text to a lower proficiency.</i></Typography>}
                        <br />
                        <Typography paragraph>Do you have ADHD?</Typography>
                        <RadioGroup row aria-label="ADHD" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "ADHD")} value={surveyQuestions["ADHD"]}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["ADHD"] && <Typography paragraph><i>Ok, we will minimize clutter, by eliminating unnecessary components on the page.</i></Typography>}
                        <br />
                        <Typography paragraph>Are you an elderly person (aged over 60)?</Typography>
                        <RadioGroup row aria-label="elderly" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "elderly")} value={surveyQuestions["elderly"]}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["elderly"] && <Typography paragraph><i>Ok, we will ensure text size is big enough, and remove unnecessary elements.</i></Typography>}
                        <br />
                        <AdaptableButton onClick={handleSettings}>
                            Apply changes to settings
                        </AdaptableButton>
                    </>
                )}
            </AdaptablePaper>
        </Drawer>
    );
}

const isTrue = (val) => (val === 'true');
