const OpenAIParams = {
    CompletionParams: {
        model: 'text-davinci-003',
        prompt: '', // generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays. Defaults to |End of text|.
        max_tokens: 7, //cannot exceed the model's context length : 2048 // check User subscription
        temperature: 0, //Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer.
        top_p: 1, //model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
        n: 1, //How many completions to generate for each prompt.
        stream: false, //Whether to stream back partial progress. If set, tokens will be sent as data-only
        logprobs: null, //the API will return a list of the 5 most likely tokens. The API will always return the logprob of the sampled token, so there may be up to logprobs+1 elements in the response.
        suffix: null, //The suffix that comes after a completion of inserted text.
        stop: null, //Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
        echo: false, // Echo back the prompt in addition to the completion
        presence_penalty: 0, //Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        frequency_penalty: 0, //based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
        best_of: 1,
        logit_bias: null, //Modify the likelihood of specified tokens appearing in the completion.
    },
    EditParams: {
        model: 'text-davinci-003', //ID of the model to use
        input: '', //The input text to use as a starting point for the edit.
        instruction: '', // The instruction that tells the model how to edit the prompt.
        n: 1, //How many edits to generate for the input and instruction.
        temperature: 1,
        top_p: 1, //nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
    },

    CreateImageParams: {
        prompt: '', //A text description of the desired image(s). The maximum length is 1000 characters.
        n: 2, //The number of images to generate. Must be between 1 and 10.
        size: '512x512',
        response_format: 'url',
    },
    EditImageParams: {
        image: '',
        prompt: '', //A text description of the desired image(s). The maximum length is 1000 characters.
        n: 2, //The number of images to generate. Must be between 1 and 10.
        size: '512x512',
        response_format: 'url',
    },
    VariationsParams: {
        image: '',
        prompt: '', //A text description of the desired image(s). The maximum length is 1000 characters.
        n: 2, //The number of images to generate. Must be between 1 and 10.
        size: '512x512',
        response_format: 'url',
    },
    CreateEmbeddingsParams: {
        model: 'text-embedding-ada-002',
        input: '.', //Input text to get embeddings for, encoded as a string or array of tokens.
    },
    UploadFileParams: {
        id: '',
        object: 'file',
        bytes: 0,
        created_at: 0,
        filename: '',
        purpose: '',
    },
    DefaultQueryConfigs: {
        Temperature: 0.7,
        Max_Tokens: 700,
        Top_p: 1,
        Best_Of: 1,
        Frequency_Penalty: 0.01,
        Presense_Penalty: 0.01,
        Image_1_size: 512 * 512,
        Image_2_size: 1024 * 1024,
        Image_3_size: 3000 * 3000,
    },
}

module.exports = OpenAIParams