import Button from "./components/button/Button";
import Icon from "./components/icon/Icon";
import Text from "./components/text/Text";

function App() {
  return (
    <main className="h-full w-full flex flex-col items-center gap-6 py-6 md:py-0 md:justify-center md:flex-row">
      <div
        id="calculator"
        className="flex flex-col gap-6 bg-stone-900 px-8 pb-8 py-14 rounded-2xl shadow-card"
      >
        {/* DISPLAY */}
        <div className="font-dot-gothic flex flex-col gap-2 bg-stone-800 [background-image:var(--gradient-calculator-display)] px-4 py-2 rounded-sm">
          <Text size={"small"} tone={"dark"} className={"text-right"}>
            1+1
          </Text>
          <div id="result" className="flex justify-center items-center">
            <Icon name={"equal-line"} size={24} color="#6B6B6B" />
            <Text
              size={"large"}
              tone={"tint"}
              as="h1"
              className={"grow text-right"}
            >
              13
            </Text>
          </div>
        </div>
        {/* BUTTONS SECTION */}
        <div id="buttons" className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <Button size={"default"} color={"neutral"}>
              CE
            </Button>
            <Button size={"large"} color={"neutral"}>
              C
            </Button>
            <Button size={"default"} color={"secondary"}>
              <Icon
                name={"asterisk"}
                size={28}
                color="var(--color-grey-primary)"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-3">
            <Button size={"default"} color={"neutral"}>
              7
            </Button>
            <Button size={"default"} color={"neutral"}>
              8
            </Button>
            <Button size={"default"} color={"neutral"}>
              9
            </Button>
            <Button size={"default"} color={"secondary"}>
              <Icon
                name={"divide-line"}
                size={28}
                color="var(--color-grey-primary)"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-3">
            <Button size={"default"} color={"neutral"}>
              4
            </Button>
            <Button size={"default"} color={"neutral"}>
              5
            </Button>
            <Button size={"default"} color={"neutral"}>
              6
            </Button>
            <Button size={"default"} color={"secondary"}>
              <Icon
                name={"subtract-line"}
                size={28}
                color="var(--color-grey-primary)"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-3">
            <Button size={"default"} color={"neutral"}>
              1
            </Button>
            <Button size={"default"} color={"neutral"}>
              2
            </Button>
            <Button size={"default"} color={"neutral"}>
              3
            </Button>
            <Button size={"default"} color={"secondary"}>
              <Icon
                name={"add-line"}
                size={28}
                color="var(--color-grey-primary)"
              />
            </Button>
          </div>
          <div className="flex flex-row gap-3">
            <Button size={"large"} color={"neutral"}>
              0
            </Button>
            <Button size={"default"} color={"neutral"}>
              ,
            </Button>
            <Button size={"default"} color={"primary"}>
              <Icon
                name={"equal-line"}
                size={28}
                color="var(--color-grey-primary)"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* CALCULATION HISTORY */}
      <div
        id="calculation-history"
        className="flex flex-col gap-4 px-8 py-9 rounded-2xl bg-stone-900 w-[356px] h-[572px] shadow-card"
      >
        <Text size={"medium"} tone={"light"} className={"text-left"}>
          Operations log
        </Text>
        {/* LOG HISTORY */}
        <div id="logs" className="flex flex-col gap-3">
          <Text size={"small"} tone={"light"} className={"text-left"}>
            1 + 1 = 2
          </Text>
          <Text size={"small"} tone={"light"} className={"text-left"}>
            2 + 3 + 1 = 6
          </Text>
          <Text size={"small"} tone={"light"} className={"text-left"}>
            2 + 3 = 5
          </Text>
        </div>
      </div>
    </main>
  );
}

export default App;
