import React, { useState, useContext } from 'react';
import adaptableTheme from '../../utils/adaptableTheme';
import AdaptableBox from '../adaptable/AdaptableBox';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    Drawer,
    IconButton,
    makeStyles,
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
        top: "75px",
        height: "calc(100vh - 75px)",
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
            backgroundColor: "#002984"
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
    radioButton: {
        color: "#FFFFFF"
    }


}));

export default function AdaptableMenu(props) {
    const { darkMode, setDarkMode, fontSize, setFontSize, fontFamily, setFontFamily } = useContext(AdaptableContext);
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
        surveyQuestions["lowVision"] && setFontSize(adaptableTheme.fontSize.x_large);
        surveyQuestions["photophobic"] && !darkMode && setDarkMode(true);
        //surveyQuestions["lowLanguageProficiency"] -> call function to set simplicity of text, if true
        surveyQuestions["ADHD"] && setFontFamily(adaptableTheme.fonts.adhd_friendly);//also call function to minimize elements if true
        surveyQuestions["elderly"] && setFontSize(adaptableTheme.fontSize.x_large); // also call function to minimise the unnecessary elements
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
                    <AdaptableTypography align="right">Hide Menu</AdaptableTypography>
                    <ChevronRightIcon />
                </IconButton>
            </AdaptableBox>
            <Divider />
            <AdaptablePaper className={classes.paper}>
                <AdaptableTypography variant="h6"><b>Accessibility Menu</b></AdaptableTypography>
                <br />
                <AdaptableTypography paragraph align="justify">Would you like to go directly to accessibility settings, or answer a survey so we can enhance your user experience?</AdaptableTypography>
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
                        <AdaptableTypography variant="h6">Settings</AdaptableTypography>
                        <br />
                        <FormControl component="fieldset">
                            <AdaptableTypography paragraph>Contrast</AdaptableTypography>
                            <FormControlLabel
                                value={darkMode}
                                checked={darkMode}
                                control={<Switch color={darkMode ? "secondary" : "primary"} />}
                                label="Dark mode"
                                labelPlacement="end"
                                onChange={e => setDarkMode(!darkMode)}
                            />
                            <br />
                            <AdaptableTypography paragraph>Text size</AdaptableTypography>
                            <div style={{ marginLeft: '20px' }}>
                                <AdaptableSlider
                                    aria-label="TextSize"
                                    defaultValue={10}
                                    value={
                                        fontSize === adaptableTheme.fontSize.small ? 0 : 
                                        (fontSize === adaptableTheme.fontSize.medium || fontSize === null) ? 10 : 
                                        fontSize === adaptableTheme.fontSize.large ? 20 : 
                                        30
                                    }
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks={[{ value: 0, label: 'Small' }, { value: 10, label: 'Normal' }, { value: 20, label: 'Large' }, { value: 30, label: 'X-Large' }]}
                                    min={0}
                                    max={30}
                                    onChange={(event, value) => {
                                        setFontSize(
                                            value === 0 ? adaptableTheme.fontSize.small : 
                                            value === 10 ? adaptableTheme.fontSize.medium : 
                                            value === 20 ? adaptableTheme.fontSize.large : 
                                            adaptableTheme.fontSize.x_large
                                        )
                                    }}
                                    classes={{ markLabel: classes.mark }}
                                />
                            </div>
                            <br />
                            <AdaptableTypography paragraph>Non-essential page elements</AdaptableTypography>
                            <FormControlLabel
                                value={false} //change this to read boolean hide from context
                                control={<Switch color={darkMode ? "secondary" : "primary"} />}
                                label="Hide"
                                labelPlacement="end"
                                onChange={e => console.log("Clicked me")} //change this to set the boolean hide value
                            />
                            <br />
                            <AdaptableTypography paragraph>English language proficiency</AdaptableTypography>
                            <FormControlLabel
                                value={false} //change this to read boolean easyTextMode from context
                                control={<Switch color={darkMode ? "secondary" : "primary"} />}
                                label="Easy mode"
                                labelPlacement="end"
                                onChange={e => console.log("Clicked me")} //change this to set the boolean easyTextMode value
                            />
                            <br />
                            <AdaptableTypography paragraph>Font style</AdaptableTypography>
                            <Select
                                value={fontFamily ?? adaptableTheme.fonts.default}
                                variant="outlined"
                                onChange={e => setFontFamily(e.target.value)}
                                className={darkMode ? classes.darkModeSelect : classes.lightModeSelect}
                                MenuProps={{
                                    MenuListProps: {
                                        disablePadding: true
                                    }
                                }}
                            >
                                <AdaptableListItem value={adaptableTheme.fonts.default} >
                                    <AdaptableTypography style={{ backgroundColor: "inherit" }} >Standard font</AdaptableTypography>
                                </AdaptableListItem>
                                <AdaptableListItem value={adaptableTheme.fonts.adhd_friendly}>
                                    <AdaptableTypography style={{ backgroundColor: "inherit" }}>ADHD-friendly font</AdaptableTypography>
                                </AdaptableListItem>
                            </Select>
                        </FormControl>
                    </>
                )}
                {initialQuestion === 'survey' && (
                    <>
                        <AdaptableTypography variant="h6">Survey</AdaptableTypography>
                        <br />
                        <AdaptableTypography paragraph>Do you have any vision impairments?</AdaptableTypography>
                        <RadioGroup row aria-label="lowVision" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "lowVision")} value={surveyQuestions["lowVision"]}>
                            <FormControlLabel value={true} control={<Radio style={{ color: "#FFF" }} />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio style={{ color: "#FFF" }} />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["lowVision"] && <AdaptableTypography paragraph><i>Ok, we will increase text size.</i></AdaptableTypography>}
                        <br />
                        <AdaptableTypography paragraph>Do you have photophobia (sensitivity to light)?</AdaptableTypography>
                        <RadioGroup row aria-label="photophobic" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "photophobic")} value={surveyQuestions["photophobic"]}>
                            <FormControlLabel value={true} control={<Radio style={{ color: "#FFF" }} />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio style={{ color: "#FFF" }} />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["photophobic"] && <AdaptableTypography paragraph><i>Ok, we will activate dark mode.</i></AdaptableTypography>}
                        <br />
                        <AdaptableTypography paragraph>What level of content vocabulary would you prefer?</AdaptableTypography>
                        <RadioGroup row aria-label="lowLanguageProficiency" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "lowLanguageProficiency")} value={surveyQuestions["lowLanguageProficiency"]}>
                            <FormControlLabel value={true} control={<Radio style={{ color: "#FFF" }} />} label="Simple as possible" />
                            <FormControlLabel value={false} control={<Radio style={{ color: "#FFF" }} />} label="Technical jargon is acceptable" />
                        </RadioGroup>
                        {surveyQuestions["lowLanguageProficiency"] && <AdaptableTypography paragraph><i>Ok, we will simplify the text.</i></AdaptableTypography>}
                        <br />
                        <AdaptableTypography paragraph>Do you have ADHD?</AdaptableTypography>
                        <RadioGroup row aria-label="ADHD" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "ADHD")} value={surveyQuestions["ADHD"]}>
                            <FormControlLabel value={true} control={<Radio style={{ color: "#FFF" }} />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio style={{ color: "#FFF" }} />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["ADHD"] && <AdaptableTypography paragraph><i>Ok, we will use an ADHD friendly font.</i></AdaptableTypography>}
                        <br />
                        <AdaptableTypography paragraph>Do you have trouble reading smaller text?</AdaptableTypography>
                        <RadioGroup row aria-label="elderly" name="row-radio-buttons-group" onChange={e => onChangeSurveyQuestions(isTrue(e.target.value), "elderly")} value={surveyQuestions["elderly"]}>
                            <FormControlLabel value={true} control={<Radio style={{ color: "#FFF" }} />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio style={{ color: "#FFF" }} />} label="No" />
                        </RadioGroup>
                        {surveyQuestions["elderly"] && <AdaptableTypography paragraph><i>Ok, we will increase text size.</i></AdaptableTypography>}
                        <br />
                        <AdaptableButton onClick={handleSettings} style={{ backgroundColor: "#00194f" }}>
                            Apply changes to settings
                        </AdaptableButton>
                    </>
                )}
            </AdaptablePaper>
        </Drawer>
    );
}

const isTrue = (val) => (val === 'true');
