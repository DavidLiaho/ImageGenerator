import { useForm } from "react-hook-form";
import "./Generator.css";
import { ParamsModel } from "../../../Models/ParamsModel";
import { generatorService } from "../../../Services/GeneratorService";
import { promptEngineeringService } from "../../../Services/PromptEngineeringService";
import { useState } from "react";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function Generator(): JSX.Element {

    const { register, handleSubmit } = useForm<ParamsModel>();
    const [imageUrl, setImageUrl] = useState<string>(null);

    async function send(params: ParamsModel) {
        try {
            setImageUrl("");
            const prompt = promptEngineeringService.getPrompt(params);
            console.log(prompt);
            
            const imageUrl = await generatorService.generateImage(prompt);
            console.log(imageUrl);
            setImageUrl(imageUrl);
        }
        catch (err: any) {
            setImageUrl(null);
            alert(err.message);
        }
    }

    return (
        <div className="Generator">

            <form onSubmit={handleSubmit(send)}>

                <label>Image Description: </label>
                <textarea {...register("description")} required minLength={2}></textarea>

                <label>Image Style: </label>
                <input type="text" list="paintingStyles" {...register("style")} autoComplete="off" minLength={2} />
                <datalist id="paintingStyles">
                    <option value="Impressionism" />
                    <option value="Cubism" />
                    <option value="Surrealism" />
                    <option value="Expressionism" />
                    <option value="Abstract Art" />
                    <option value="Realism" />
                    <option value="Baroque" />
                    <option value="Renaissance" />
                    <option value="The Simpsons" />
                    <option value="Family Guy" />
                </datalist>

                <button disabled={imageUrl === ""}>Go</button>

            </form>


            {imageUrl === "" &&
                <Spinner />
            }

            {imageUrl &&
                <div>
                    <img src={imageUrl} />
                </div>
            }

        </div>
    );
}
