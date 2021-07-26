<template>
    <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#F34841"
            v-bind="attrs"
            v-on="on"
            width="50"
            dark
          >END</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="#F34841"
              dark
            >
            <div class="text-h6 ml-10">
            競標時間結束
            </div>
            </v-toolbar>
            <v-card-text>
              <div class="text-h6 pa-8">競標已結束<br/>得標會員請至會員介面確認相關事宜！</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>
