package gertecepos700;


import android.os.RemoteException;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import wangpos.sdk4.libbasebinder.Printer;
import wangpos.sdk4.libbasebinder.Printer.Align;
import wangpos.sdk4.libbasebinder.RspCode;


/**
 * This class echoes a string called from JavaScript.
 */
public class GertecEPOS700 extends CordovaPlugin {

    private System mSystem;
    private Printer mPrinter;

    private boolean bloop = false;
    private boolean bthreadrunning = false;


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if("iniciarContexto".equals(action)) {
            inicializarContextoImpressora(callbackContext);
            return true;
        } else if ("imprimir".equals(action)) {
            imprimir();
            return true;
        }
        return false;
    }

    private void imprimir() {
        bloop = false;
        if (bthreadrunning == false)
            new PrintThread().start();
    }


    private void inicializarContextoImpressora(final CallbackContext callbackContext) {




        cordova.getActivity().runOnUiThread(
                    new Runnable() {
                        public void run() {
                            new Thread() {
                                @Override
                                public void run() {
                                    mPrinter = new wangpos.sdk4.libbasebinder.Printer(cordova.getActivity().getApplicationContext());
                                }
                            }.start();
                        }
                    }
            );

//        new Thread() {
//            @Override
//            public void run() {
//                mPrinter = new wangpos.sdk4.libbasebinder.Printer(cordova.getActivity().getApplicationContext());
//            }
//        }.start();
    }

    private void testPrintString(int result){
        try {
            result = mPrinter.printString("TESTE", 30, Align.CENTER, false, false);
            result = mPrinter.printString("TESTE", 30, Align.CENTER, false, false);
            result = mPrinter.printString("TESTE", 30, Align.CENTER, false, false);
        } catch (RemoteException e){
            e.printStackTrace();
        }

    }

    public class PrintThread extends Thread {
        @Override
        public void run () {
            bthreadrunning = true;
            int datalen = 0;
            int result = 0;
            byte[] senddata = null;

            do {
                try {
                    result = mPrinter.printInit();
                } catch (RemoteException e) {
                    e.printStackTrace();
                }

                try {
                    // Print text
                    testPrintString(result);

                    result = mPrinter.printPaper(100);
                    if (result != RspCode.OK)
                        bloop = false;

                    result = mPrinter.printFinish();
                    if (result != RspCode.OK)
                        bloop = false;
                } catch (Exception e) {
                    e.printStackTrace();
                }

            } while (bloop);
            bthreadrunning = false;
        }
    }


}
