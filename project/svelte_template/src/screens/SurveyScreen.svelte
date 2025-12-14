<script>
    import { questions } from "../lib/questions.js";
    import { preferences } from "../stores/preferences.js";
    import QuestionCard from "../components/QuestionCard.svelte";
    import ProgressBar from "../components/ProgressBar.svelte";

    export let goTo;

    let currentStep = 0;
    $: currentQuestion = questions[currentStep];
    $: totalSteps = questions.length;
    $: isLastStep = currentStep === totalSteps - 1;

    // Sync with store
    $: currentValue = $preferences[currentQuestion.id];

    function handleSelect(value) {
        if (currentQuestion.multiple) {
            preferences.toggleAvoid(value);
        } else {
            preferences.setField(currentQuestion.id, value);
            // Auto advance for single choice if not last step?
            // User might want to change, so manual Next is better?
            // Requirement 2.6 says "Back/Next buttons".
            // But let's allow click to select.
        }
    }

    function handleNext() {
        // Validation: check if answered?
        // Preferences are nullable initially.
        if (isEmpty(currentValue)) {
            alert("Please select an option");
            return;
        }

        if (isLastStep) {
            goTo("result");
        } else {
            currentStep++;
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
        } else {
            // maybe back to intro?
            goTo("intro");
        }
    }

    function isEmpty(val) {
        if (Array.isArray(val)) return val.length === 0;
        return val === null || val === undefined;
    }
</script>

<div
    class="max-w-md w-full mx-auto p-4 flex flex-col h-screen md:h-auto md:min-h-[600px] justify-between"
>
    <!-- Header -->
    <div class="mb-6">
        <div class="flex justify-between items-center mb-4">
            <button
                class="text-gray-500 hover:text-gray-800"
                on:click={handleBack}
            >
                &larr; Back
            </button>
            <span class="text-sm font-semibold text-gray-500"
                >Step {currentStep + 1} of {totalSteps}</span
            >
        </div>
        <ProgressBar current={currentStep + 1} total={totalSteps} />
    </div>

    <!-- Content -->
    <div class="flex-grow flex flex-col justify-center">
        <QuestionCard
            question={currentQuestion}
            value={currentValue}
            onSelect={handleSelect}
        />
    </div>

    <!-- Footer -->
    <div class="mt-8">
        <button
            class="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            on:click={handleNext}
            disabled={isEmpty(currentValue)}
        >
            {isLastStep ? "Show Results" : "Next Question"}
        </button>
    </div>
</div>
