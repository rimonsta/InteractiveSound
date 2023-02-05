

// analog input variables
int sustain = A3;
int sustainValue;
int sustainScaled;

// button variables
int button1Pin = 6;
int button1State = 0;
int lastButton1State = 0;

int button2Pin = 7;
int button2State = 0;
int lastButton2State = 0;

int button3Pin = 8;
int button3State = 0;
int lastButton3State = 0;

int button4Pin = 9;
int button4State = 0;
int lastButton4State = 0;

int button5Pin = 10;
int button5State = 0;
int lastButton5State = 0;

int button6Pin = 11;
int button6State = 0;
int lastButton6State = 0;

int button7Pin = 12;
int button7State = 0;
int lastButton7State = 0;

int button8Pin = 13;
int button8State = 0;
int lastButton8State = 0;

// for updateInterval timer:
unsigned long updateInterval = 100; // how often to read pins and send over serial (in ms)
unsigned long lastUpdate = 0;
int now; 


void setup() {

  // configure pins as inputs / outputs as needed
  pinMode(button1Pin, INPUT_PULLUP);
  pinMode(button2Pin, INPUT_PULLUP);
  pinMode(button3Pin, INPUT_PULLUP);
  pinMode(button4Pin, INPUT_PULLUP);
  pinMode(button5Pin, INPUT_PULLUP);
  pinMode(button6Pin, INPUT_PULLUP);
  pinMode(button7Pin, INPUT_PULLUP);
  pinMode(button8Pin, INPUT_PULLUP);

  // start the serial port communications
  Serial.begin(115200);
}

void loop() {  

  now = millis();
  // update if updateInterval has been exceeded
  if (now > lastUpdate + updateInterval) {
    lastUpdate = now;

    // read pins
    sustainValue = analogRead(sustain);
    sustainScaled = map(sustainValue, 0, 1023, 0, 10);

    // read pins
    button1State = digitalRead(button1Pin);
    button2State = digitalRead(button2Pin);
    button3State = digitalRead(button3Pin);
    button4State = digitalRead(button4Pin);
    button5State = digitalRead(button5Pin);
    button6State = digitalRead(button6Pin);
    button7State = digitalRead(button7Pin);
    button8State = digitalRead(button8Pin);

    if (button1State == HIGH && lastButton1State == LOW) {
      Serial.print(1);
      lastButton1State = button1State;
    }
    else {
      Serial.print(0);
      lastButton1State = button1State;
    }

    if (button2State == HIGH && lastButton2State == LOW) {
      Serial.print(1);
      lastButton2State = button2State;
    }
    else {
      Serial.print(0);
      lastButton2State = button2State;
    }

    if (button3State == HIGH && lastButton3State == LOW) {
      Serial.print(1);
      lastButton3State = button3State;
    }
    else {
      Serial.print(0);
      lastButton3State = button3State;
    }

    if (button4State == HIGH && lastButton4State == LOW) {
      Serial.print(1);
      lastButton4State = button4State;
    }
    else {
      Serial.print(0);
      lastButton4State = button4State;
    }

    if (button5State == HIGH && lastButton5State == LOW) {
      Serial.print(1);
      lastButton5State = button5State;
    }
    else {
      Serial.print(0);
      lastButton5State = button5State;
    }

    if (button6State == HIGH && lastButton6State == LOW) {
      Serial.print(1);
      lastButton6State = button6State;
    }
    else {
      Serial.print(0);
      lastButton6State = button6State;
    }

    if (button7State == HIGH && lastButton7State == LOW) {
      Serial.print(1);
      lastButton7State = button7State;
    }
    else {
      Serial.print(0);
      lastButton7State = button7State;
    }

    if (button8State == HIGH && lastButton8State == LOW) {
      Serial.print(1);
      lastButton8State = button8State;
    }
    else {
      Serial.print(0);
      lastButton8State = button8State;
    }

    // send values over serial connection
    // print analog value
    Serial.print(sustainScaled);


    // send a new line at the end of the list
    Serial.println();
  }
}
