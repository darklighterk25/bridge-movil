import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SpeechRecognition, SpeechRecognitionTranscription } from "nativescript-speech-recognition";
import { SearchBar } from "ui/search-bar";
import { Observable } from "data/observable";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})
export class SearchComponent extends Observable implements OnInit {

    private speechRecognition = new SpeechRecognition();
    private searchString: string;
    public listening: boolean = false;

    constructor() {
        super();
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.checkAvailability();
        this.speechRecognition.requestPermission().then((granted: boolean) => {
            console.log("Granted? " + granted);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    checkAvailability(): void {
        this.speechRecognition.available().then(
            (available: boolean) => console.log(available ? "YES!" : "NO"),
            (err: string) => console.log(err)
        );
    }

    startListening(): void {
        let that = this;
        this.speechRecognition.startListening({
            returnPartialResults: true,
            onResult: (transcription: SpeechRecognitionTranscription) => {
                that.set("searchString", transcription.text);
                if (transcription.finished) {
                    this.listening = false;
                    console.log(`User said: ${transcription.text}`);
                    this.stopListening();
                }
            },
            onError: (error: string | number) => {
                if (typeof error === "number") {
                    switch (error) {
                        case 6:
                            console.error("ANDROID_ERROR_SPEECH_TIMEOUT: No speech input.");
                            break;

                        case 7:
                            console.error("ANDROID_ERROR_NO_MATCH: No recognition result matched.");
                            break;

                        default:
                            console.error("ANDROID_ERROR: An error has occurred");
                            break;
                    }
                } else {
                    console.log("IOS_ERROR:", error);
                }
                this.stopListening();
            }
        }).then(
            (started: boolean) => {
                console.log(`started listening: ${started}`);
                this.listening = true;
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    stopListening(): void {
        this.speechRecognition.stopListening().then(
            () => {
                console.log(`stopped listening`);
                this.listening = false;
            },
            (errorMessage: string) => {
                console.error(`Stop error: ${errorMessage}`);
            }
        );
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
        searchBar.dismissSoftInput();
    }

    onSearch(searchValue) {
        if (searchValue !== "") {
            console.log(searchValue);
        }
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Buscar";
        searchBar.dismissSoftInput();
    }

    public onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    }

    textFieldValue: string = "";
}
